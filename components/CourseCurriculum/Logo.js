import React from 'react';

export function Logo({ name, color }) {
  // In a real implementation, you would use actual logos
  // This is a simplified version that mimics the logos
  return (
    <div className="flex items-center">
      {name === "zepto" && (
        <div className={`font-bold ${color}`}>zepto</div>
      )}
      
      {name === "NotebookLM" && (
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-indigo-600 mr-2"></div>
          <div className={`font-medium ${color}`}>NotebookLM</div>
        </div>
      )}
      
      {name === "perplexity" && (
        <div className={`font-medium ${color}`}>perplexity</div>
      )}
    </div>
  );
}