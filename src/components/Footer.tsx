export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            © {year} 代可行 · 用 Next.js + MDX 驱动
          </p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/Try-my-live" target="_blank" rel="noopener" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              GitHub
            </a>
            <a href="/rss.xml" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              RSS
            </a>
            <span className="text-xs text-[var(--muted)]">Powered by Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
