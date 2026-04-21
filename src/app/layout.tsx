import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: '代可行', template: '%s | 代可行' },
  description: '程序员的独立博客，分享技术与思考',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '代可行',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main className="max-w-5xl mx-auto px-6 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
