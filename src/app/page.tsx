import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, Zap } from 'lucide-react';

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-block text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default">
      {tag}
    </span>
  );
}

export default function HomePage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="pt-16 pb-8">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-[var(--border)]">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 text-xs text-[var(--accent)] border border-[var(--accent)]/30 bg-[var(--accent)]/8 px-3 py-1 rounded-full mb-6 font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              技术博客
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-tight mb-6 tracking-tight">
              写代码，<br />
              <span className="text-[var(--muted)]">也写点别的。</span>
            </h1>
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mb-8">
              后端开发者的个人站点。关于技术、架构、工程化，以及偶尔的碎碎念。
              用最新技术栈，最少废话。
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://github.com/Try-my-live" target="_blank" rel="noopener" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <Link href="/about" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                <BookOpen size={14} />
                关于我
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden md:flex flex-col gap-4 shrink-0 w-48">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 text-center">
              <div className="font-display font-extrabold text-3xl text-[var(--accent)]">{posts.length}</div>
              <div className="text-xs text-[var(--muted)] mt-1">篇文章</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 text-center">
              <div className="flex justify-center gap-3 mb-1">
                <Zap size={14} className="text-[var(--accent)]" />
              </div>
              <div className="text-xs text-[var(--muted)]">Next.js 15</div>
              <div className="text-xs text-[var(--muted)]">SSR · MDX</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pt-12 pb-4">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={14} className="text-[var(--accent)]" />
            <h2 className="font-display font-bold text-sm uppercase tracking-wider text-[var(--muted)]">置顶文章</h2>
          </div>
          <Link
            href={`/posts/${featured.slug}`}
            className="group block bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--accent)]/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {featured.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
                  <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                    <Calendar size={12} />
                    {featured.date}
                  </span>
                  <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                    <Clock size={12} />
                    {featured.readingTime}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-2xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">{featured.description}</p>
              </div>
              <div className="shrink-0 mt-2">
                <div className="w-10 h-10 rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] flex items-center justify-center transition-colors">
                  <ArrowRight size={16} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts */}
      {rest.length > 0 && (
        <section className="pt-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-xl">全部文章</h2>
            <span className="text-sm text-[var(--muted)]">{rest.length} 篇</span>
          </div>

          <div className="grid gap-4">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)]/40 transition-all duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {post.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
                    <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                      <Clock size={11} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] line-clamp-2">{post.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all shrink-0 mt-6 sm:mt-0"
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-2xl mt-12">
          <p className="text-[var(--muted)] mb-3">还没有文章</p>
          <p className="text-sm text-[var(--muted)]">在 <code className="text-xs bg-[var(--surface)] px-1.5 py-0.5 rounded border border-[var(--border)]">src/content/posts/</code> 添加 .mdx 文件即可</p>
        </div>
      )}
    </div>
  );
}
