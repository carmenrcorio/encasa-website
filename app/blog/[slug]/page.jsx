import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — En Casa`,
    description: post.excerpt,
  };
}

const mdxComponents = {
  h2: (props) => (
    <h2
      className="font-serif text-2xl text-olive mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-serif text-xl text-olive mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-[17px] leading-[1.75] mb-6"
      style={{ color: '#374151' }}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gold pl-5 my-6 italic"
      style={{ color: '#4B5563' }}
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-sm px-1.5 py-0.5 rounded bg-ivory text-olive"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 mb-6 space-y-2 text-[17px]"
      style={{ color: '#374151' }}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 mb-6 space-y-2 text-[17px]"
      style={{ color: '#374151' }}
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-gold underline underline-offset-2 hover:text-olive transition-colors"
      {...props}
    />
  ),
};

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <article className="max-w-[680px] mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gold hover:text-olive transition-colors mb-10"
        >
          &larr; All posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-olive leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-olive/50">
            {post.category && (
              <span className="inline-block px-2.5 py-0.5 bg-olive/10 text-olive rounded-full font-mono text-[10px] uppercase tracking-wider">
                {post.category}
              </span>
            )}
            <span>{formattedDate}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
            {post.author && (
              <>
                <span>&middot;</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
        </header>

        {/* Body */}
        <div className="prose-encasa">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}