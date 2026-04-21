import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-block text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default">
      {tag}
    </span>
  );
}

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16 pb-8">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-[var(--border)]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs text-[var(--accent)] border border-[var(--accent)]/30 bg-[var(--accent)]/8 px-3 py-1 rounded-full mb-6 font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            技术博客
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            写代码，<br />
            <span className="text-[var(--muted)]">也写点别的。</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl">
            后端开发者的个人站点。关于技术、架构、工程化，以及偶尔的碎碎念。
            用最新技术栈，最少废话。
          </p>
        </div>
      </section>

      {/* Post List */}
      <section className="pt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-xl">最新文章</h2>
          <span className="text-sm text-[var(--muted)]">{posts.length} 篇</span>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-2xl">
            <p className="text-[var(--muted)] mb-3">还没有文章</p>
            <p className="text-sm text-[var(--muted)]">在 <code className="text-xs bg-[var(--surface)] px-1.5 py-0.5 rounded border border-[var(--border)]">src/content/posts/</code> 添加 .mdx 文件即可</p>
          </div>
        ) : (
          <div className="grid gap-5">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group block bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)]/40 transition-all duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {post.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
                      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] line-clamp-2">{post.description}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
