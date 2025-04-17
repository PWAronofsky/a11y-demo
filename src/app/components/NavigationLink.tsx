'use client';

import { MouseEvent, KeyboardEvent } from 'react';

interface NavigationLinkProps {
  target: string;
  children: React.ReactNode;
}

export function NavigationLink({ target, children }: NavigationLinkProps) {
  const scrollToHeading = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.focus();
    }
  };

  const handleLinkClick = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    scrollToHeading(target);
  };

  return (
    <a 
      href={`#${target}`}
      className="text-blue-600 dark:text-blue-400 hover:underline"
      onClick={(e) => handleLinkClick(e)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleLinkClick(e);
        }
      }}
    >
      {children}
    </a>
  );
} 