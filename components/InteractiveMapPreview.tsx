import React from 'react';

const InteractiveMapPreview: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/30">
        <div className="container mx-auto px-4 text-center">
             <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
                Interactive Maps
             </div>
             <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12">See where to go.</h2>

             <div className="relative max-w-6xl mx-auto flex justify-center">
                {/* Blurred Ambient Background from the Image itself */}
                <div className="absolute inset-0 max-w-sm mx-auto top-10 scale-125 opacity-40 blur-3xl pointer-events-none">
                    <img src="/screenshot-map.png" alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Main Screenshot Container */}
                <div className="relative z-10 group perspective-[1000px]">
                    <img 
                        src="/screenshot-map.png" 
                        alt="Aurora Map Screenshot" 
                        className="w-[320px] h-auto rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105"
                    />
                    
                    {/* Floating Label */}
                    <div className="absolute -bottom-6 -right-12 bg-slate-800/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl shadow-xl transform transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-white">Live Visibility Overlay</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
  );
};

export default InteractiveMapPreview;