import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
      
      <div className="space-y-12 relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-slate-800 -ml-px hidden md:block"></div>

        {EXPERIENCE.map((job, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={job.id} className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-800 z-10 -ml-4 hidden md:flex items-center justify-center">
                 <div className="w-2.5 h-2.5 rounded-full bg-brand-500"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                  <div className="flex items-center gap-2 mb-1 text-brand-400 font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                  
                  <div className={`bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-500/30 transition-all w-full relative group ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                    {/* Mobile Dot */}
                    <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 z-10 flex md:hidden items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                    </div>
                    
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                       <h3 className="text-xl font-bold text-white">{job.role}</h3>
                       <span className="text-sm font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">{job.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-500 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map(skill => (
                        <span key={skill} className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for the other side of timeline */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};