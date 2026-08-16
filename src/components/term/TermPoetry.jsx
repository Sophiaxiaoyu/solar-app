import React from 'react';

export function TermPoetry({ poetry }) {
  if (!Array.isArray(poetry) || poetry.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">诗词歌赋</h2>
      <div className="space-y-6">
        {poetry.map((poem, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              {poem.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              作者：{poem.author}
            </p>
            <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
              {poem.content.split('\n').map((line, i) => (
                <p key={i} className="mb-1">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}