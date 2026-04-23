import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Lucky Lee', template: '%s | Lucky Lee' },
  description: '程序员的独立博客，分享前端、AI 与技术思考',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Lucky Lee',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
