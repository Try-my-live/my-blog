import type { Metadata } from 'next';
import { getAllTags, getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { Tag } from 'lucide-react';

export const metadata: Metadata = { title: '标签' };

export default function TagsPage() {
  const tags = getAllTags();
  const posts = getAllPosts();

  const tagCounts = tags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = posts.filter(p => p.tags.includes(tag)).length;
    return acc;
  }, {});

  return (
    <div className="pt-12 pb-16">
      <h1 className="font-display font-extrabold text-4xl mb-3">标签</h1>
      <p className="text-[var(--muted)] mb-10">共 {tags.length} 个标签</p>

      {tags.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-2xl">
          <p className="text-[var(--muted)]">还没有标签</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Tag size={14} />
              {tag}
              <span className="text-xs opacity-60">({tagCounts[tag]})</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
