import React from 'react';
import { Logo } from './Logo';

export function PartnerLogos() {
  return (
    <div className="flex items-center space-x-6 pt-4 border-t border-indigo-800/30">
      <Logo name="zepto" color="text-orange-500" />
      <Logo name="NotebookLM" color="text-gray-300" />
      <Logo name="perplexity" color="text-blue-400" />
    </div>
  );
}