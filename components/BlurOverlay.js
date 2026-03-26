'use client';

export default function BlurOverlay({ style = {}, className = '' }) {
  return (
    <div
      className={`absolute rounded-lg pointer-events-none ${className}`}
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'rgba(250, 246, 239, 0.3)',
        ...style,
      }}
    />
  );
}
