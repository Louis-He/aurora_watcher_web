import React, { useState } from 'react';
import { FEATURES } from '../constants';

const SCREENSHOTS = [
  '/screenshot-realtime.png', // Real-Time Precision
  '/screenshot-forecast.png',  // Geo Conditions
  '/screenshot-map.png',      // Interactive Maps
  // '/screenshot-map-viewing.png' // Viewing Conditions
];

const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 pb-32 bg-slate-900/50 relative" id="features">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to <br />catch the lights.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tap a feature to preview the experience.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12 lg:mb-16">
          {FEATURES.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  relative text-left p-6 rounded-3xl border transition-all duration-300 group outline-none cursor-pointer
                  ${isActive 
                    ? 'bg-slate-800 border-green-500/50 shadow-lg shadow-green-500/10 -translate-y-1' 
                    : 'bg-slate-950/50 border-white/5 hover:bg-slate-900 hover:border-white/10'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300
                  ${isActive ? 'bg-slate-700 scale-110' : 'bg-slate-900 group-hover:bg-slate-800'}
                `}>
                   {feature.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {feature.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Screenshot Display */}
        <div className="relative w-full flex justify-center perspective-[2000px] min-h-[600px] lg:min-h-[650px]">
            {/* Ambient Glow */}
            <div className={`absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-500/20 rounded-full blur-[80px] transition-opacity duration-700 ${activeIndex !== null ? 'opacity-40' : 'opacity-0'}`}></div>

            {SCREENSHOTS.map((src, idx) => (
                <div 
                    key={idx}
                    className={`absolute top-0 transition-all duration-700 ease-out transform origin-bottom ${
                        activeIndex === idx 
                        ? 'opacity-100 translate-y-0 rotate-0 scale-100 z-10' 
                        : 'opacity-0 translate-y-12 rotate-2 scale-95 z-0 pointer-events-none'
                    }`}
                >
                    <div className="relative">
                      <img 
                          src={src} 
                          alt={FEATURES[idx].title}
                          className="w-[280px] md:w-[320px] h-auto rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl bg-slate-950"
                      />
                      {/* Reflection/Shine effect */}
                      <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 pointer-events-none"></div>
                    </div>
                    
                    {/* Caption for current view */}
                    <div className={`mt-8 text-center transition-all duration-500 delay-100 ${activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300">
                           {FEATURES[idx].title} Preview
                        </span>
                    </div>
                </div>
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;