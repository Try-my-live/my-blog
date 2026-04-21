import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

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
  return {
    title: post.title,
    description: post.description,
  };
}

function TagBadge({ tag }: { tag: string }) {
  return (
    <Link href={`/tags/${tag}`}
      className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
      <Tag size={10} />{tag}
    </Link>
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
    <article className="pt-12 pb-16 max-w-3xl mx-auto">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-10 group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        返回列表
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
        </div>
        <h1 className="font-display font-extrabold text-4xl leading-tight mb-6 tracking-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-5 text-sm text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>
      </header>

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-10" />

      {/* Content */}
      <div className="prose">
        {content}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          返回首页
        </Link>
      </div>
    </article>
  );
}
