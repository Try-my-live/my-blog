import type { Metadata } from 'next';
import { Globe, Mail, Rss } from 'lucide-react';

export const metadata: Metadata = { title: '关于' };

export default function AboutPage() {
  return (
    <div className="pt-12 pb-16 max-w-2xl">
      <h1 className="font-display font-extrabold text-4xl mb-10">关于</h1>

      <div className="space-y-8">
        {/* Avatar + Intro */}
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-amber-600 flex items-center justify-center shrink-0">
            <span className="text-3xl font-display font-extrabold text-black">L</span>
          </div>
          <div>
            <h2 className="font-display font-bold text-xl mb-1">Lucky Lee</h2>
            <p className="text-[var(--muted)] text-sm mb-3">后端开发 · 热爱手搓</p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="GitHub">
                <Globe size={18} />
              </a>
              <a href="mailto:hello@example.com" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="/rss.xml" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="RSS">
                <Rss size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-[#D6D3D1]">
          <p>计算机出身，毕业后在大厂做了四年后端开发。</p>
          <p>代码 review 从不废话，批注从不解释为什么，默认你能看懂。</p>
          <p>下班后爱打游戏，段位甚高。</p>
          <p>极度务实，只关注能不能解决问题，以结果为导向。</p>
          <p>沉默寡言但并非冷漠，对自己要求严苛，极度自律。</p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4">技术栈</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Next.js 15', desc: 'App Router + RSC' },
              { label: 'TypeScript', desc: '类型安全' },
              { label: 'Tailwind CSS', desc: '原子化样式' },
              { label: 'MDX', desc: 'Markdown + JSX' },
              { label: 'Vercel', desc: '免费 SSR 部署' },
              { label: 'Shiki', desc: '代码高亮' },
            ].map(item => (
              <div key={item.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3">
                <div className="font-medium text-sm mb-0.5">{item.label}</div>
                <div className="text-xs text-[var(--muted)]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4">联系方式</h3>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 space-y-2 text-sm text-[#D6D3D1]">
            <p>如果你有任何问题、建议或合作意向，欢迎联系我：</p>
            <p>📧 <a href="mailto:hello@example.com" className="text-[var(--accent)] hover:underline">hello@example.com</a></p>
            <p>💬 你也可以通过博客留言与我交流</p>
          </div>
        </div>
      </div>
    </div>
  );
}
