import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Bio & Image Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        {/* Profile Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
           <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-20"></div>
              <div className="absolute inset-0 bg-purple-500 rounded-2xl -rotate-6 group-hover:-rotate-3 transition-transform duration-300 opacity-20"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
           </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-7/12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span className="w-12 h-1 bg-brand-500 rounded-full"></span>
            About Me
          </h2>
          
          <div className="prose prose-lg prose-invert text-slate-400 leading-relaxed">
            <p>
              Hello! I'm a passionate Full Stack Developer with over 5 years of experience in building digital products. My journey began with a curiosity for how software shapes our daily lives, and that curiosity has evolved into a career dedicated to creating meaningful web experiences.
            </p>
            <p>
              I specialize in the JavaScript ecosystem, particularly React and Node.js, but I'm always exploring new technologies to solve complex problems efficiently. I thrive in collaborative environments where I can mentor others and learn from diverse perspectives.
            </p>
            <p>
              When I'm not pushing commits, you can find me exploring hiking trails, trying to brew the perfect cup of coffee, or contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 text-center sm:text-left">
               <h4 className="text-3xl font-bold text-brand-400 mb-1">5+</h4>
               <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Years Exp.</p>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 text-center sm:text-left">
               <h4 className="text-3xl font-bold text-purple-400 mb-1">50+</h4>
               <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Projects</p>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 text-center sm:text-left col-span-2 sm:col-span-1">
               <h4 className="text-3xl font-bold text-pink-400 mb-1">24/7</h4>
               <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Commitment</p>
             </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-slate-700"></span>
          Technical Skills
          <span className="w-8 h-px bg-slate-700"></span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-500/30 transition-all hover:-translate-y-1 shadow-lg shadow-black/20">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-700/50 pb-3">
                {category.icon}
                <h4 className="text-lg font-semibold text-white">{category.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-md bg-slate-900 text-slate-300 text-sm border border-slate-700/50 hover:border-brand-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};