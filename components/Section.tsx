import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${dark ? 'bg-corporate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: boolean }> = ({ children, subtitle }) => (
  <div className="mb-16 md:mb-24">
    <h2 className="text-3xl md:text-5xl font-bold text-corporate-900 tracking-tight mb-6 font-display">
      {children}
    </h2>
    {subtitle && (
      <div className="h-1.5 w-20 bg-accent rounded-full mb-8"></div>
    )}
  </div>
);