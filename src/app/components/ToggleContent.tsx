'use client';

import { useState } from 'react';

export function ToggleContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button 
        onClick={toggleContent}
        aria-expanded={isExpanded}
        aria-controls="expandable-content"
        className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isExpanded ? 'Hide Content' : 'Show Content'}
      </button>
      <div 
        id="expandable-content"
        className={`mt-4 text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
        hidden={!isExpanded}
      >
        <div className="p-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold mb-2">Toggleable Content</h3>
          <p>This content can be shown or hidden using the button above. The content is properly announced to screen readers using ARIA attributes.</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Uses aria-expanded to indicate state</li>
            <li>Uses aria-controls to associate with content</li>
            <li>Provides clear button text that changes based on state</li>
            <li>Includes smooth transitions for better UX</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 