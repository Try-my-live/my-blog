'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

function Callout({ type = 'info', children }: { type?: string; children: React.ReactNode }) {
  const colors: Record<string, string> = {
    info: 'border-blue-500 bg-blue-500/10',
    warning: 'border-yellow-500 bg-yellow-500/10',
    danger: 'border-red-500 bg-red-500/10',
    tip: 'border-emerald-500 bg-emerald-500/10',
  };
  return (
    <div className={`prose-callout border-l-4 rounded-r-xl p-4 my-6 ${colors[type] ?? colors.info}`}>
      {children}
    </div>
  );
}

const components = {
  Callout,
};

export default function MDXComponents({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />;
}
