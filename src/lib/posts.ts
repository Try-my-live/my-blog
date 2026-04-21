import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  cover?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function parseDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toISOString().split('T')[0];
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '');
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8');
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title ?? 'Untitled',
      date: parseDate(data.date ?? Date.now().toString()),
      description: data.description ?? '',
      tags: data.tags ?? [],
      readingTime: rt.text,
      cover: data.cover,
    } as PostMeta;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: parseDate(data.date ?? Date.now().toString()),
    description: data.description ?? '',
    tags: data.tags ?? [],
    readingTime: rt.text,
    cover: data.cover,
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
