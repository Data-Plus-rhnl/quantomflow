'use client';

import React, { useEffect, useRef } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

export default function AboutSection() {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aboutArt = artRef.current;
    if (!aboutArt) return;

    const svg = aboutArt.querySelector('svg');
    const hubGroup = aboutArt.querySelector('#hubGroup');
    if (!svg || !hubGroup) return;

    const ns = 'http://www.w3.org/2000/svg';
    const mouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const scaleX = 480 / rect.width;
      const scaleY = 600 / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX - 240;
      mouse.y = (e.clientY - rect.top) * scaleY - 280;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    aboutArt.addEventListener('mousemove', handleMouseMove);
    aboutArt.addEventListener('mouseleave', handleMouseLeave);

    const orbits = [
      { rx: 100, ry: 30, rot: 0, speed: 0.008, offset: 0 },
      { rx: 100, ry: 30, rot: 60, speed: -0.006, offset: 2.1 },
      { rx: 100, ry: 30, rot: 120, speed: 0.007, offset: 4.2 },
    ];

    const nodeColors = ['var(--qf-accent)', 'var(--qf-accent-2)'];
    const nodes: Array<{
      el: SVGCircleElement;
      orbit: (typeof orbits)[0];
      angle: number;
      vx: number;
      vy: number;
      currentX: number;
      currentY: number;
    }> = [];

    // Clear any previous nodes
    const existingCircles = hubGroup.querySelectorAll('.dynamic-node');
    existingCircles.forEach((c) => c.remove());
    const existingLines = hubGroup.querySelectorAll('.dynamic-line');
    existingLines.forEach((l) => l.remove());

    for (let i = 0; i < 6; i++) {
      const orbit = orbits[i % 3];
      const c = document.createElementNS(ns, 'circle');
      c.setAttribute('r', '5');
      c.setAttribute('fill', nodeColors[i % 2]);
      c.setAttribute('class', 'dynamic-node');
      hubGroup.appendChild(c);

      nodes.push({
        el: c,
        orbit: orbit,
        angle: orbit.offset + (i < 3 ? 0 : Math.PI),
        vx: 0,
        vy: 0,
        currentX: 0,
        currentY: 0,
      });
    }

    const interLines: SVGLineElement[] = [];
    for (let i = 0; i < 6; i++) {
      const l = document.createElementNS(ns, 'line');
      l.setAttribute('stroke', 'var(--qf-accent)');
      l.setAttribute('stroke-width', '1');
      l.setAttribute('opacity', '0.12');
      l.setAttribute('class', 'dynamic-line');
      hubGroup.insertBefore(l, hubGroup.firstElementChild);
      interLines.push(l);
    }

    function getOrbitPos(orbit: (typeof orbits)[0], angle: number) {
      const rad = (orbit.rot * Math.PI) / 180;
      const ex = Math.cos(angle) * orbit.rx;
      const ey = Math.sin(angle) * orbit.ry;
      const x = ex * Math.cos(rad) - ey * Math.sin(rad);
      const y = ex * Math.sin(rad) + ey * Math.cos(rad);
      return { x, y };
    }

    let animationId: number;

    function animateHub() {
      nodes.forEach((n) => {
        n.angle += n.orbit.speed;
        const pos = getOrbitPos(n.orbit, n.angle);

        let tx = pos.x + n.vx;
        let ty = pos.y + n.vy;

        if (mouse.active) {
          const dx = tx - mouse.x;
          const dy = ty - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80 && dist > 1) {
            const push = ((80 - dist) / 80) * 0.2;
            n.vx += (dx / dist) * push * 4;
            n.vy += (dy / dist) * push * 4;
          }
        }

        n.vx *= 0.92;
        n.vy *= 0.92;

        n.el.setAttribute('cx', String(tx));
        n.el.setAttribute('cy', String(ty));
        n.currentX = tx;
        n.currentY = ty;
      });

      let li = 0;
      for (let i = 0; i < 6; i++) {
        for (let j = i + 1; j < 6; j++) {
          const dx = nodes[i].currentX - nodes[j].currentX;
          const dy = nodes[i].currentY - nodes[j].currentY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && li < interLines.length) {
            interLines[li].setAttribute('x1', String(nodes[i].currentX));
            interLines[li].setAttribute('y1', String(nodes[i].currentY));
            interLines[li].setAttribute('x2', String(nodes[j].currentX));
            interLines[li].setAttribute('y2', String(nodes[j].currentY));
            interLines[li].setAttribute('opacity', String(0.15 * (1 - dist / 180)));
            li++;
          }
        }
      }

      for (let i = li; i < interLines.length; i++) {
        interLines[i].setAttribute('opacity', '0');
      }

      animationId = requestAnimationFrame(animateHub);
    }

    animationId = requestAnimationFrame(animateHub);

    return () => {
      cancelAnimationFrame(animationId);
      aboutArt.removeEventListener('mousemove', handleMouseMove);
      aboutArt.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <ScrollReveal>
          <div className="about-art" ref={artRef}>
            <svg
              viewBox="0 0 480 600"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0D1220" />
                  <stop offset="100%" stopColor="#161D33" />
                </linearGradient>
                <linearGradient id="glowGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--qf-accent)" />
                  <stop offset="100%" stopColor="var(--qf-accent-2)" />
                </linearGradient>
                <radialGradient id="spotGrad" cx="50%" cy="30%">
                  <stop offset="0%" stopColor="rgba(79,209,255,0.15)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              <rect width="480" height="600" fill="url(#bgGrad)" />
              <rect width="480" height="600" fill="url(#spotGrad)" />

              {/* Grid pattern */}
              <g stroke="rgba(79,209,255,0.08)" strokeWidth="1" fill="none">
                <line x1="0" y1="150" x2="480" y2="150" />
                <line x1="0" y1="300" x2="480" y2="300" />
                <line x1="0" y1="450" x2="480" y2="450" />
                <line x1="120" y1="0" x2="120" y2="600" />
                <line x1="240" y1="0" x2="240" y2="600" />
                <line x1="360" y1="0" x2="360" y2="600" />
              </g>

              {/* Central globe/network */}
              <g id="hubGroup" transform="translate(240, 280)">
                <circle r="100" fill="none" stroke="url(#glowGrad)" strokeWidth="1.5" opacity="0.4" />
                <circle r="70" fill="none" stroke="var(--qf-accent)" strokeWidth="1" opacity="0.3" />
                <ellipse rx="100" ry="30" fill="none" stroke="var(--qf-accent)" strokeWidth="1" opacity="0.3" />
                <ellipse rx="100" ry="30" fill="none" stroke="var(--qf-accent)" strokeWidth="1" opacity="0.3" transform="rotate(60)" />
                <ellipse rx="100" ry="30" fill="none" stroke="var(--qf-accent)" strokeWidth="1" opacity="0.3" transform="rotate(120)" />
                <circle r="6" fill="url(#glowGrad)" />
              </g>

              {/* Animated floating dots */}
              <circle cx="80" cy="100" r="3" fill="var(--qf-accent)" opacity="0.6">
                <animate attributeName="cy" values="100;80;100" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="500" r="3" fill="var(--qf-accent-2)" opacity="0.6">
                <animate attributeName="cy" values="500;480;500" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="420" cy="150" r="2" fill="var(--qf-accent)" opacity="0.5">
                <animate attributeName="cy" values="150;135;150" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.15;0.5" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="120" cy="350" r="2.5" fill="var(--qf-accent-2)" opacity="0.4">
                <animate attributeName="cx" values="120;140;120" dur="6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="6s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="80" r="2" fill="var(--qf-accent)" opacity="0.35">
                <animate attributeName="cy" values="80;65;80" dur="4.5s" repeatCount="indefinite" />
                <animate attributeName="cx" values="350;365;350" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="450" r="2" fill="var(--qf-accent-2)" opacity="0.3">
                <animate attributeName="cx" values="60;75;60" dur="5.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="5.5s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="about-tag">
              <span className="dot"></span> Dubai, UAE
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <div className="eyebrow">Local Presence</div>
            <h2 className="h2">Helping Dubai&apos;s local businesses grow.</h2>
            <p className="lede">
              Based in Dubai, we design and build websites tailored specifically for the UAE&apos;s retail, hospitality, and service sectors. We focus on modern standards, local payment integrations, and search visibility.
            </p>
            <ul className="about-list">
              <li>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <div>
                  <b>Local payment setup</b>
                  <span>Seamless integration with local gateways like Network International, Stripe, PayTabs, Apple Pay, and Google Pay.</span>
                </div>
              </li>
              <li>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div>
                  <b>Quick local support</b>
                  <span>No timezone delay. We are available to answer calls, make edits, and solve issues during Dubai business hours.</span>
                </div>
              </li>
              <li>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" />
                </svg>
                <div>
                  <b>High performance</b>
                  <span>Modern mobile-first coding practices that load your site in milliseconds, keeping your customers engaged and buying.</span>
                </div>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
