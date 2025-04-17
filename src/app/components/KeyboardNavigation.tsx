'use client';

import { useState } from 'react';

export function KeyboardNavigation() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Keyboard Navigation Demo</h3>
        <p className="text-gray-900 dark:text-gray-100">
          This demo shows proper keyboard navigation patterns. Try using:
        </p>
        <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100">
          <li>Tab key to move between interactive elements</li>
          <li>Enter/Space to activate items</li>
        </ul>
      </div>

      <div className="space-y-4" role="group" aria-label="Navigation options">
        {['First item', 'Second item', 'Third item'].map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`block w-full text-left p-4 rounded border transition-colors ${
              activeIndex === index
                ? 'bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-900 dark:text-blue-100'
                : 'bg-white dark:bg-gray-700 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-pressed={activeIndex === index}
            aria-current={activeIndex === index ? "true" : "false"}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <p className="text-gray-900 dark:text-gray-100">
          Current selection: {activeIndex !== null ? `Item ${activeIndex + 1}` : 'None'}
        </p>
      </div>
    </div>
  );
} 