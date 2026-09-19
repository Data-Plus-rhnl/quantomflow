'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
} from 'react';
import { useNavbar } from '../layout/NavbarContext';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

// ─── Icons ───────────────────────────────────────────────────────────────────

// QF logo mark — standalone isolated logo icon
function QFMark({ size = 26 }: { size?: number }) {
  const iconW = Math.round(size * 0.72);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#ffffff',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/qf-logo-mark.png"
        alt="Quantum Flow"
        style={{
          width: `${iconW}px`,
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

function IconSend() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22l-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Typing dots ─────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 0' }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(79,209,255,0.6)',
            display: 'inline-block',
            animation: `qfDot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Suggested prompts ────────────────────────────────────────────────────────

const SUGGESTIONS = [
  'What services do you offer?',
  'How much does a website cost?',
  'How long does it take?',
  'Do you work with restaurants?',
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi! I'm **Qara**, Quantum Flow's AI assistant. I can answer questions about our services, pricing, and process — or help you figure out what kind of website your business needs. What's on your mind?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const { menuOpen } = useNavbar();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
      setHasUnread(false);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setShowSuggestions(false);

      const userMsg: Message = {
        id: `u-${Date.now()}`,
        role: 'user',
        content: trimmed,
      };

      const assistantId = `a-${Date.now()}`;
      const assistantMsg: Message = {
        id: assistantId,
        role: 'assistant',
        content: '',
        isStreaming: true,
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setInput('');
      setIsLoading(true);

      abortRef.current = new AbortController();

      try {
        const history = [
          ...messages.map((m) => ({ role: m.role, content: m.content })),
          { role: 'user' as const, content: trimmed },
        ];

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
          signal: abortRef.current.signal,
        });

        if (!res.ok || !res.body) {
          throw new Error('API error');
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: accumulated, isStreaming: true }
                : m
            )
          );
        }

        // Mark streaming done
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, isStreaming: false } : m
          )
        );

        // If chat is closed, mark unread
        if (!isOpen) setHasUnread(true);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: "Sorry, I couldn't reach the server. Please try again or contact us directly.",
                  isStreaming: false,
                }
              : m
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages, isOpen]
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // Render markdown bold (**text**) simply
  const renderContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  // Hide when mobile menu is open (after all hooks)
  if (menuOpen) return null;

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        type="button"
        aria-label={isOpen ? 'Close chat' : 'Open AI chat assistant'}
        className="floating-bot-btn"
        onClick={() => setIsOpen((v) => !v)}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 50,
          width: '52px',
          height: '52px',
          borderRadius: '14px',
          background: isOpen
            ? 'rgba(22,29,51,0.95)'
            : '#ffffff',
          border: isOpen
            ? '1.5px solid rgba(79,209,255,0.85)'
            : buttonHovered
            ? '1.5px solid #4FD1FF'
            : '1.5px solid rgba(79,209,255,0.65)',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isOpen
            ? '0 8px 24px rgba(0,0,0,0.6)'
            : buttonHovered
            ? '0 8px 24px rgba(0,0,0,0.65)'
            : '0 4px 16px rgba(0,0,0,0.45)',
          transition: 'all 0.25s cubic-bezier(0.22,0.61,0.36,1)',
          transform: isOpen
            ? 'rotate(0deg)'
            : buttonHovered
            ? 'scale(1.04) translateY(-2px)'
            : 'scale(1) translateY(0)',
        }}
      >
        {isOpen ? (
          <IconChevronDown />
        ) : (
          <img
            src="/qf-logo-mark.png"
            alt="Quantum Flow"
            className="floating-bot-icon"
            style={{
              width: '36px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        )}

        {/* Unread dot */}
        {hasUnread && !isOpen && (
          <span
            style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#FF6B6B',
              border: '2px solid #0A0E1A',
              animation: 'qfPulseRed 1.5s ease-in-out infinite',
            }}
          />
        )}
      </button>

      {/* Always visible label for chatbot */}
      {!isOpen && (
        <div
          className="floating-label"
          style={{
            position: 'fixed',
            bottom: '37px',
            right: '88px',
            zIndex: 49,
            padding: '8px 14px',
            borderRadius: '8px',
            background: 'rgba(10,14,26,0.95)',
            border: '1px solid rgba(79,209,255,0.35)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            fontFamily: 'var(--qf-font-display)',
            fontSize: '13px',
            fontWeight: 500,
            color: '#E8ECF5',
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 24px -8px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
          }}
        >
          Ask Qara about our services
        </div>
      )}

      {/* ── Chat window ── */}
      <div
        role="dialog"
        aria-label="Quantum Flow AI Chat"
        aria-hidden={!isOpen}
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '28px',
          zIndex: 49,
          width: 'clamp(320px, 90vw, 400px)',
          height: '560px',
          background: 'linear-gradient(160deg, #0F1528 0%, #0A0E1A 100%)',
          border: '1px solid rgba(79,209,255,0.2)',
          borderRadius: '24px',
          boxShadow:
            '0 32px 80px -16px rgba(0,0,0,0.85), 0 0 0 1px rgba(79,209,255,0.1), 0 0 60px -20px rgba(79,209,255,0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s cubic-bezier(0.22,0.61,0.36,1), transform 0.3s cubic-bezier(0.22,0.61,0.36,1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '18px 20px 16px',
            borderBottom: '1px solid rgba(35,43,71,0.8)',
            background: 'rgba(10,14,26,0.6)',
            backdropFilter: 'blur(12px)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Avatar */}
            <QFMark size={36} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--qf-font-display)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#E8ECF5',
                  lineHeight: 1.2,
                }}
              >
                Qara
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginTop: '2px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#68D391',
                    boxShadow: '0 0 6px rgba(110,231,183,0.8)',
                    display: 'inline-block',
                    animation: 'qfPulseGreen 2s ease-in-out infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '10px',
                    color: 'rgba(91,100,128,0.9)',
                  }}
                >
                  Quantum Flow AI · Online
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(22,29,51,0.8)',
              border: '1px solid rgba(35,43,71,0.8)',
              color: 'rgba(91,100,128,0.8)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,107,107,0.15)';
              e.currentTarget.style.borderColor = 'rgba(255,107,107,0.35)';
              e.currentTarget.style.color = '#FF6B6B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(22,29,51,0.8)';
              e.currentTarget.style.borderColor = 'rgba(35,43,71,0.8)';
              e.currentTarget.style.color = 'rgba(91,100,128,0.8)';
            }}
          >
            <IconClose />
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(35,43,71,0.8) transparent',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                gap: '8px',
                alignItems: 'flex-end',
              }}
            >
              {/* Assistant avatar dot */}
              {msg.role === 'assistant' && (
                <div style={{ marginBottom: '2px', flexShrink: 0 }}>
                  <QFMark size={24} />
                </div>
              )}

              <div
                style={{
                  maxWidth: '82%',
                  padding: msg.role === 'user' ? '10px 14px' : '12px 14px',
                  borderRadius:
                    msg.role === 'user'
                      ? '16px 16px 4px 16px'
                      : '16px 16px 16px 4px',
                  background:
                    msg.role === 'user'
                      ? 'linear-gradient(135deg, rgba(79,209,255,0.18) 0%, rgba(123,97,255,0.14) 100%)'
                      : 'rgba(22,29,51,0.7)',
                  border:
                    msg.role === 'user'
                      ? '1px solid rgba(79,209,255,0.25)'
                      : '1px solid rgba(35,43,71,0.7)',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: msg.role === 'user' ? '#E8ECF5' : 'rgba(200,208,224,0.95)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  wordBreak: 'break-word',
                }}
              >
                {msg.isStreaming && msg.content === '' ? (
                  <TypingDots />
                ) : (
                  <>
                    {renderContent(msg.content)}
                    {msg.isStreaming && (
                      <span
                        style={{
                          display: 'inline-block',
                          width: '2px',
                          height: '13px',
                          background: '#4FD1FF',
                          marginLeft: '2px',
                          verticalAlign: 'text-bottom',
                          animation: 'qfBlink 0.7s steps(1) infinite',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Suggested prompts */}
          {showSuggestions && messages.length === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
              <span
                style={{
                  fontFamily: 'var(--qf-font-mono)',
                  fontSize: '10px',
                  color: 'rgba(91,100,128,0.6)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  paddingLeft: '32px',
                }}
              >
                Quick questions
              </span>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => sendMessage(s)}
                  style={{
                    alignSelf: 'flex-start',
                    marginLeft: '32px',
                    fontFamily: 'var(--qf-font-mono)',
                    fontSize: '11.5px',
                    color: 'rgba(79,209,255,0.85)',
                    background: 'rgba(79,209,255,0.07)',
                    border: '1px solid rgba(79,209,255,0.2)',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(79,209,255,0.14)';
                    e.currentTarget.style.borderColor = 'rgba(79,209,255,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(79,209,255,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(79,209,255,0.2)';
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div
          style={{
            padding: '12px 14px',
            borderTop: '1px solid rgba(35,43,71,0.8)',
            background: 'rgba(10,14,26,0.7)',
            backdropFilter: 'blur(12px)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '8px',
              background: 'rgba(22,29,51,0.8)',
              border: '1px solid rgba(35,43,71,0.9)',
              borderRadius: '14px',
              padding: '8px 8px 8px 14px',
              transition: 'border-color 0.2s ease',
            }}
            onFocusCapture={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                'rgba(79,209,255,0.35)';
            }}
            onBlurCapture={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                'rgba(35,43,71,0.9)';
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                // Auto-grow up to 5 lines
                e.target.style.height = 'auto';
                e.target.style.height =
                  Math.min(e.target.scrollHeight, 100) + 'px';
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything…"
              rows={1}
              disabled={isLoading}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                resize: 'none',
                fontFamily: 'var(--qf-font-body)',
                fontSize: '13px',
                color: '#E8ECF5',
                lineHeight: 1.5,
                maxHeight: '100px',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                caretColor: '#4FD1FF',
              }}
              aria-label="Type your message"
            />
            <button
              type="button"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background:
                  input.trim() && !isLoading
                    ? 'linear-gradient(135deg, #4FD1FF, #7B61FF)'
                    : 'rgba(35,43,71,0.6)',
                border: 'none',
                color: input.trim() && !isLoading ? '#050810' : 'rgba(91,100,128,0.5)',
                cursor: input.trim() && !isLoading ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                transform:
                  input.trim() && !isLoading ? 'scale(1)' : 'scale(0.95)',
              }}
            >
              {isLoading ? (
                <span
                  style={{
                    width: '14px',
                    height: '14px',
                    border: '2px solid rgba(79,209,255,0.3)',
                    borderTopColor: '#4FD1FF',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'qfSpin 0.7s linear infinite',
                  }}
                />
              ) : (
                <IconSend />
              )}
            </button>
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '8px',
              fontFamily: 'var(--qf-font-mono)',
              fontSize: '9.5px',
              color: 'rgba(91,100,128,0.5)',
              letterSpacing: '0.04em',
            }}
          >
            Powered by Quantum Flow AI · Shift+Enter for new line
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes qfDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes qfBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes qfSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes qfPulseGreen {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(110,231,183,0.8); }
          50% { opacity: 0.6; box-shadow: 0 0 12px rgba(110,231,183,0.4); }
        }
        @keyframes qfPulseRed {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @media (max-width: 768px) {
          .floating-label {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .floating-bot-btn {
            bottom: 18px !important;
            right: 16px !important;
            width: 44px !important;
            height: 44px !important;
            border-radius: 12px !important;
          }
          .floating-bot-icon {
            width: 28px !important;
          }
        }
      `}</style>
    </>
  );
}
