import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} DevFolio. Built with React, Tailwind & Gemini API.
        </p>
      </div>
    </footer>
  );
};