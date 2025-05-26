'use client';

import React from 'react';

export function SessionTheory({ content }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">{content.title}</h3>
        <div className="flex space-x-2">
          <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">SATURDAY - 12PM IST</span>
          <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full">LIVE + 3HRS</span>
        </div>
      </div>
      
      <ul className="space-y-2 text-sm">
        {content.topics.map((topic, index) => (
          <li key={index} className="flex items-start">
            <span className="text-indigo-400 mr-2"> <img src="/images/right-click.png" alt="icon" className='mt-1'/></span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}