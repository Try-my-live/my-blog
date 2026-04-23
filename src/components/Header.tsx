import Link from 'next/link';
import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div className="h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">D</span>
            </div>
            <span className="font-display font-bold text-base text-[var(--text)]">Lucky Lee</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)] z-10 pointer-events-none" />
              <input
                type="text"
                placeholder="搜索文章..."
                className="w-full h-9 pl-9 pr-4 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 transition-all"
              />
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-1 shrink-0">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-lg hover:bg-[var(--accent-light)] transition-all">
              首页
            </Link>
            <Link href="/tags" className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-lg hover:bg-[var(--accent-light)] transition-all">
              标签
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-lg hover:bg-[var(--accent-light)] transition-all">
              关于
            </Link>
            <a href="https://github.com/Try-my-live" target="_blank" rel="noopener" className="ml-1 px-3 py-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
