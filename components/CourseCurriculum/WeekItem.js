'use client';
import "./style.css";
import React from 'react'; 
export function WeekItem({ number, isActive, onClick }) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      {number < 8 && (
        <div className="absolute left-4 top-5 h-[100px] w-0.5 bg-indigo-700/50"></div>
      )}
      
      <div className="flex items-start space-x-6 ">
        <div className={`flex-shrink-0 h-7 relative top-6 w-7 rounded-full shap-rounded ${isActive ? 'bg-indigo-600' : 'bg-indigo-800'} flex items-center justify-center text-white font-medium z-10 transition-colors duration-200`}>
          {/* <span>{number}</span> */}
          <div className="shap-rounded-innner  h-5 w-5 rounded-full border-3 "></div>
        </div>
       <div className="w-7 h-1 bg-[#F2EAFC] absolute left-6 top-9 shap-rounded"></div>
        <div className={` rounded-lg p-4 w-full transition-all duration-200 ${isActive ? 'border hover:border-indigo-500/50 transform scale-102 bg-white' : 'border border-[#7735d9a4] backdrop-blur-3xl bg-transparent'} `}>
          <h3 className={`font-bold uppercase text-sm  ${isActive? 'text-black':"text-white"}`}>WEEK {number}</h3>
          <p className={`text-xs mt-1 ${isActive? 'text-blue-600':"text-white"}`}>How to think like a 1% Product Manager?</p>
        </div>
      </div>
    </div>
  );
}