import { Globe, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {year} 代可行. 用 Next.js + MDX 驱动.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="GitHub">
            <Globe size={16} />
          </a>
          <a href="mailto:hello@example.com" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="Email">
            <Mail size={16} />
          </a>
          <span className="text-xs text-[var(--muted)]">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
