import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-6 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-12 h-12 mb-6"
        aria-hidden="true"
      >
        <path
          d="M8 28 L8 16 Q8 8 16 8 Q24 8 24 16 L24 28"
          stroke="#C8A951"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="font-serif text-4xl md:text-5xl text-olive mb-4">
        Page not found
      </h1>
      <p className="text-lg text-olive/60 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-3.5 bg-gold text-olive font-semibold rounded-full hover:bg-gold/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
