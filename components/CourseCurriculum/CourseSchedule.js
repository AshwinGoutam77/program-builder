import React from 'react';
import { WeekItem } from './WeekItem';
import { SessionTheory } from './SessionTheory';
import { SessionLab } from './SessionLab';
import { PartnerLogos } from './PartnerLogos';

export function CourseSchedule() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Timeline Section */}
      <div className="md:col-span-4 space-y-4">
        <WeekItem number={1} isActive={true} />
        <WeekItem number={2} isActive={false} />
        <WeekItem number={3} isActive={false} />
        <WeekItem number={4} isActive={false} />
        <WeekItem number={5} isActive={false} />
        <WeekItem number={6} isActive={false} />
        <WeekItem number={7} isActive={false} />
        <WeekItem number={8} isActive={false} />
      </div>

      {/* Session Details Section */}
      <div className="md:col-span-8">
        <div className="bg-indigo-950/50 rounded-xl p-6 border border-indigo-800/30 backdrop-blur-sm space-y-8">
          <SessionTheory />
          <SessionLab />
          <PartnerLogos />
        </div>
      </div>
    </div>
  );
}