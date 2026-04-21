import Link from 'next/link';
import { Rss, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
            <span className="text-black font-display font-extrabold text-sm">D</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            代可行<span className="text-[var(--accent)]">.</span>
          </span>
        </Link>

        {/* Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200">
            博客
          </Link>
          <Link href="/tags" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200">
            标签
          </Link>
          <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200">
            关于
          </Link>

          <div className="w-px h-4 bg-[var(--border)]" />

          <a href="https://github.com" target="_blank" rel="noopener" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="GitHub">
            <Globe size={18} />
          </a>
          <a href="/rss.xml" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="RSS">
            <Rss size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
