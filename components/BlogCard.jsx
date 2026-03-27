import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)' }}
    >
      {/* Cover image or gradient fallback */}
      {post.coverImage ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={600}
            height={300}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="h-48"
          style={{
            background: 'linear-gradient(135deg, #2D4A3E 0%, #1C2B25 100%)',
          }}
        />
      )}

      <div className="p-6">
        {/* Category pill */}
        {post.category && (
          <span className="inline-block px-2.5 py-0.5 bg-olive/10 text-olive rounded-full font-mono text-[10px] uppercase tracking-wider mb-3">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h3 className="font-serif text-xl text-olive mb-2 leading-snug group-hover:text-gold transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-olive/55 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-olive/40">
          <span>
            {post.date &&
              new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
          </span>
          <span>{post.readTime}</span>
        </div>

        {/* Read more */}
        <p className="mt-3 text-sm font-medium text-gold group-hover:translate-x-1 transition-transform inline-block">
          Read more &rarr;
        </p>
      </div>
    </Link>
  );
}