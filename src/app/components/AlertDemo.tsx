'use client';

import { useState } from 'react';

export function AlertDemo() {
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = () => {
    setAlertMessage('New alert message received! This will be announced by screen readers.');
    // Clear the alert after 5 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={showAlert}
        className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Trigger Alert
      </button>
      
      {alertMessage && (
        <div 
          role="alert"
          aria-live="polite"
          className="bg-blue-100 dark:bg-gray-700 p-4 rounded text-gray-900 dark:text-gray-100"
        >
          {alertMessage}
        </div>
      )}
    </div>
  );
} 