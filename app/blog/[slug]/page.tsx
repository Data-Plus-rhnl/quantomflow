import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BLOG_POSTS, getBlogPost } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Article Not Found — Quantum Flow',
    };
  }

  return {
    title: `${post.title} — Quantum Flow`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Quantum Flow`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Quantum Flow`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main id="top" style={{ paddingTop: '80px' }}>
        <section className="section">
          <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link
              href="/#blog"
              className="back-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--qf-font-mono)',
                fontSize: '13px',
                color: 'var(--qf-accent)',
                textDecoration: 'none',
                marginBottom: '32px',
                transition: 'transform 0.2s',
              }}
            >
              ← Back to insights
            </Link>

            <article
              style={{
                borderBottom: '1px solid var(--qf-line-soft)',
                paddingBottom: '28px',
                marginBottom: '40px',
              }}
            >
              <div
                className="eyebrow"
                style={{ marginBottom: '12px' }}
              >
                {post.category}
              </div>
              <h1
                className="h2"
                style={{
                  fontSize: 'clamp(28px, 5vw, 44px)',
                  lineHeight: '1.2',
                  fontWeight: 700,
                  marginBottom: '16px',
                  fontFamily: 'var(--qf-font-display)',
                  color: 'var(--qf-text)',
                }}
              >
                {post.title}
              </h1>
              <div
                style={{
                  fontFamily: 'var(--qf-font-mono)',
                  fontSize: '13px',
                  color: 'var(--qf-text-muted)',
                }}
              >
                Published on {post.publishedDate} · {post.readTime} · Written by {post.author}
              </div>
            </article>

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </section>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
