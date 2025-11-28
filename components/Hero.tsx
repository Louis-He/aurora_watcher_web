import React from 'react';
import { APP_STORE_LINK } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-green-500/20 via-blue-600/20 to-purple-600/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sm text-green-400 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Live Aurora Tracking
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Chase the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                Northern Lights
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Real-time aurora visibility, precise local forecasts, and interactive maps to help you find the perfect viewing spot in Canada🇨🇦
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={APP_STORE_LINK} 
                className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93.95 0 2.58.38 3.56 1.91-3.3 1.83-2.6 6.84.82 8.3-.59 1.54-1.35 2.87-3.15 4.95l-.01-.01zM14.9 4.34c.76-.98.54-2.58-.91-2.97-1.32-.46-2.48.98-2.01 2.37.28.84 1.34 1.6 2.92.6z"/></svg>
                Soon available on iOS
              </a>
              <a 
                href="https://testflight.apple.com/join/5US77U6c"
                className="flex items-center gap-2 text-green-400 font-medium px-6 py-4 hover:text-green-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Join Public Beta Testing
              </a>
            </div>
          </div>

          {/* Visuals - Actual Screenshots */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end perspective-[2000px] h-[600px] items-center">
             
             {/* Back Phone (Forecast Screen) */}
             <div className="absolute top-0 lg:top-4 left-4 lg:left-12 transform scale-90 -rotate-6 opacity-60 hover:opacity-100 hover:rotate-0 hover:scale-95 hover:z-20 transition-all duration-500 z-0">
                <img 
                  src="/screenshot-map.png" 
                  alt="Aurora Forecast Screenshot" 
                  className="w-[280px] h-auto rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl"
                />
             </div>
             
             {/* Front Phone (Real-Time Screen) */}
             <div className="relative transform rotate-3 z-10 transition-transform duration-500 hover:scale-105 hover:rotate-0">
                <img 
                  src="/screenshot-realtime.png" 
                  alt="Real-Time Dashboard Screenshot" 
                  className="w-[280px] h-auto rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;