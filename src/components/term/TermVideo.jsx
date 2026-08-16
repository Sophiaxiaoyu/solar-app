import React from 'react';

export function TermVideo({ videoUrl }) {
  if (!videoUrl) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">视频展示</h2>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <video
          className="absolute inset-0 w-full h-full rounded-lg"
          controls
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      </div>
    </section>
  );
}