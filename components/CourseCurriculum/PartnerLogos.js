import React from 'react';
import { Logo } from './Logo';

export function PartnerLogos({logo}) {
  return (
    <div className="">
      <div>
        <img src={logo} alt='logo'/>
      </div>
       {/* <Logo name="zepto" color="text-orange-500" /> */}
       {/* <Logo name="NotebookLM" color="text-gray-300" /> */}
       {/* <Logo name="perplexity" color="text-blue-400" /> */}
    </div>
  );
}