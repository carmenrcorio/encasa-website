import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      date: data.date || '',
      category: data.category || '',
      author: data.author || '',
      coverImage: data.coverImage || null,
      readTime: stats.text,
      content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || '',
    category: data.category || '',
    author: data.author || '',
    coverImage: data.coverImage || null,
    readTime: stats.text,
    content,
  };
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}