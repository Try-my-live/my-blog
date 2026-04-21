import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllTags, getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface Props { params: Promise<{ tag: string }>; }

export async function generateStaticParams() {
  return getAllTags().map(tag => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return { title: `#${tag}` };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const allTags = getAllTags();
  if (!allTags.includes(tag)) notFound();

  const posts = getAllPosts().filter(p => p.tags.includes(tag));

  return (
    <div className="pt-12 pb-16">
      <Link href="/tags" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-10 group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        所有标签
      </Link>
      <h1 className="font-display font-extrabold text-4xl mb-2">
        <span className="text-[var(--accent)]">#</span>{tag}
      </h1>
      <p className="text-[var(--muted)] mb-10">{posts.length} 篇文章</p>

      <div className="grid gap-5 max-w-3xl">
        {posts.map(post => (
          <Link key={post.slug} href={`/posts/${post.slug}`}
            className="group block bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)]/40 transition-all duration-300 hover:-translate-y-0.5">
            <h3 className="font-display font-bold text-lg mb-3 group-hover:text-[var(--accent)] transition-colors">{post.title}</h3>
            <p className="text-sm text-[var(--muted)] line-clamp-2 mb-4">{post.description}</p>
            <div className="flex gap-4 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
