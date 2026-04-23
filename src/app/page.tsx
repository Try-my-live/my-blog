import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { Calendar, Clock, Eye, MessageCircle, Star, ArrowRight, Flame, Zap, Code2, Bot } from 'lucide-react';

function TagPill({ tag, accent = false }: { tag: string; accent?: boolean }) {
  return (
    <span className={`tag-pill${accent ? ' accent' : ''}`}>{tag}</span>
  );
}

function MetaItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="meta-item">
      {icon}
      {children}
    </span>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  '前端': '#3498db',
  'AI': '#9b59b6',
  'React': '#61dafb',
  'Vue': '#42b883',
  'Node.js': '#8cc84b',
  '工具': '#95a5a6',
  '效率': '#e74c3c',
  'TypeScript': '#3178c6',
  'Next.js': '#000000',
  '架构': '#f39c12',
};

const COVER_COLORS: Record<string, string> = { '前端': '#FF6600', 'AI': '#9b59b6', 'React': '#61dafb', 'Vue': '#42b883', 'Node.js': '#8cc84b', '工具': '#95a5a6', '效率': '#e74c3c', 'TypeScript': '#3178c6', 'Next.js': '#000000', '架构': '#f39c12', '__default': '#FF6600' };
const COVER_ICONS: Record<string, React.ReactNode> = {
  '前端': <Code2 size={28} className="text-white" />,
  'AI': <Bot size={28} className="text-white" />,
  'React': <Code2 size={28} className="text-white" />,
  '工具': <Zap size={28} className="text-white" />,
  '效率': <Flame size={28} className="text-white" />,
};

function ArticleCover({ tags }: { tags: string[] }) {
  const primaryTag = tags[0] || '前端';
  const bgColor = COVER_COLORS[primaryTag] ?? COVER_COLORS['__default'];
  const icon = COVER_ICONS[primaryTag];
  return (
    <div className="article-card-cover flex items-center justify-center" style={{ background: bgColor }}>
      {icon}
    </div>
  );
}

const CATEGORIES = ['全部', '前端', 'AI', 'React', 'Vue', 'Node.js', 'TypeScript', 'Next.js', '工具', '效率'];
const HOT_POSTS = [
  { title: 'Next.js 15 App Router 完全指南', views: '8.2k', likes: 342 },
  { title: 'React Server Components 深度解析', views: '6.1k', likes: 256 },
  { title: 'Tailwind CSS v4 新特性一览', views: '4.8k', likes: 189 },
];

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="blog-layout">
      {/* Left Sidebar */}
      <aside className="sidebar-left">
        {/* Author Card */}
        <div className="sidebar-card">
          <div className="author-info">
            <div className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-xl font-display">D</span>
            </div>
            <div className="author-name">代可行</div>
            <div className="author-bio">后端开发 / 热爱手搓代码 / 游戏高段位选手</div>
          </div>
          <div className="author-stats">
            <div className="author-stat">
              <div className="author-stat-num">{posts.length}</div>
              <div className="author-stat-label">文章</div>
            </div>
            <div className="author-stat">
              <div className="author-stat-num">--</div>
              <div className="author-stat-label">访问</div>
            </div>
            <div className="author-stat">
              <div className="author-stat-num">--</div>
              <div className="author-stat-label">粉丝</div>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="sidebar-card">
          <div className="sidebar-card-title">分类</div>
          {CATEGORIES.map((cat) => (
            <Link key={cat} href={cat === '全部' ? '/' : `/tags/${cat}`} className={`category-item${cat === '全部' ? ' active' : ''}`}>
              <span>{cat}</span>
              <span className="category-dot" />
            </Link>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main>
        {/* Tab bar */}
        <div className="flex items-center gap-1 mb-5 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-1 w-fit">
          {['最新', '热门', '热榜'].map((tab, i) => (
            <span key={tab} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all cursor-pointer ${i === 0 ? 'bg-[var(--accent)] text-white shadow-sm' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}>
              {tab}
            </span>
          ))}
        </div>

        {/* Article list */}
        <div className="article-list">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="article-card">
              <ArticleCover tags={post.tags} />
              <div className="article-card-body">
                <div className="article-card-title">{post.title}</div>
                <div className="article-card-desc">{post.description}</div>
                <div className="article-card-meta">
                  {post.tags.slice(0, 2).map(tag => <TagPill key={tag} tag={tag} />)}
                  <MetaItem icon={<Calendar size={11} />}><span>{post.date}</span></MetaItem>
                  <MetaItem icon={<Clock size={11} />}><span>{post.readingTime}</span></MetaItem>
                  <MetaItem icon={<Eye size={11} />}><span>{(Math.random() * 5 + 1).toFixed(1)}k</span></MetaItem>
                  <MetaItem icon={<MessageCircle size={11} />}><span>{Math.floor(Math.random() * 30 + 5)}</span></MetaItem>
                  <MetaItem icon={<Star size={11} />}><span>{Math.floor(Math.random() * 100 + 20)}</span></MetaItem>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="sidebar-right">
        {/* Hot Posts */}
        <div className="sidebar-card">
          <div className="sidebar-card-title">🔥 热门文章</div>
          {HOT_POSTS.map((post, i) => (
            <Link key={i} href="/" className="hot-item">
              <span className="hot-rank">{i + 1}</span>
              <div>
                <div className="hot-title">{post.title}</div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-[var(--muted)]">👁 {post.views}</span>
                  <span className="text-xs text-[var(--muted)]">❤️ {post.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="sidebar-card">
          <div className="sidebar-card-title">🛠 技术栈</div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {['Next.js 15', 'React 19', 'MDX', 'Tailwind CSS v4', 'TypeScript', 'Shiki', 'Vercel'].map(tech => (
                <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="sidebar-card">
          <div className="sidebar-card-title">🔗 链接</div>
          <div className="p-3">
            <div className="flex gap-2">
              <a href="https://github.com/Try-my-live" target="_blank" rel="noopener" className="flex-1 text-center text-sm py-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-medium">
                GitHub
              </a>
              <a href="/rss.xml" className="flex-1 text-center text-sm py-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-medium">
                RSS
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
