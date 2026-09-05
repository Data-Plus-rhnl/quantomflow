import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogSection() {
  return (
    <>
      <section className="section" id="blog">
        <div className="wrap">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '56px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Blog</div>
            <h2 className="h2">Latest insights &amp; guides.</h2>
            <p className="lede" style={{ marginInline: 'auto', marginTop: '16px' }}>
              Tips and strategies to help your local business stand out and thrive in the digital economy.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="blog-grid">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card-content">
                    <span className="blog-meta">
                      {post.category} · {post.readTime}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-link">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <div className="section-divider" aria-hidden="true"></div>
    </>
  );
}
