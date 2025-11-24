import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-400 text-lg">
          A collection of projects that showcase my passion for building robust and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col h-full"
          >
            <div className="relative overflow-hidden h-48 w-full">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 {project.repoUrl && (
                   <a 
                     href={project.repoUrl} 
                     className="p-2 bg-slate-800 rounded-full text-white hover:bg-brand-500 transition-colors"
                     title="View Code"
                   >
                     <Github className="w-5 h-5" />
                   </a>
                 )}
                 {project.demoUrl && (
                   <a 
                     href={project.demoUrl} 
                     className="p-2 bg-slate-800 rounded-full text-white hover:bg-brand-500 transition-colors"
                     title="View Demo"
                   >
                     <ExternalLink className="w-5 h-5" />
                   </a>
                 )}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};