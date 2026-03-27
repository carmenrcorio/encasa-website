
import { getAllPosts } from '../../lib/posts';
import BlogCard from '../../components/BlogCard';

export const metadata = {
  title: 'Blog — En Casa',
  description: 'Perspectives on guest experience, hospitality operations, and the future of boutique travel.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
          Blog
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-olive mb-4">
          Perspectives on guest experience
        </h1>
        <p className="text-lg text-olive/60 max-w-2xl mb-16 leading-relaxed">
          Insights for operators who care about the details.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-olive/40 text-center py-16">Posts coming soon.</p>
        )}
      </div>
    </div>
  );
}