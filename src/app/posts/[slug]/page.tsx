import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { Calendar, Clock, ArrowLeft, Eye, Star, MessageCircle } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

function TagPill({ tag, accent = false }: { tag: string; accent?: boolean }) {
  return (
    <Link href={`/tags/${tag}`} className={`tag-pill${accent ? ' accent' : ''}`}>{tag}</Link>
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <div className="prose-article">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8 group">
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
        返回首页
      </Link>

      <h1>{post.title}</h1>

      <div className="article-meta-bar">
        <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
        <span className="flex items-center gap-1.5"><Clock size={13} />{post.readingTime}</span>
        <span className="flex items-center gap-1.5"><Eye size={13} />{(Math.random() * 5 + 1).toFixed(1)}k</span>
        <span className="flex items-center gap-1.5"><Star size={13} />{Math.floor(Math.random() * 100 + 20)}</span>
        <span className="flex items-center gap-1.5"><MessageCircle size={13} />{Math.floor(Math.random() * 30 + 5)}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-2">
        {post.tags.map(tag => <TagPill key={tag} tag={tag} accent />)}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', margin: '24px 0' }} />

      {content}

      <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors group">
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          返回首页
        </Link>
      </div>
    </div>
  );
}
