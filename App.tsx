import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-green-500/30">
      
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
                 <img src="/aurora_watcher_1024px.png" alt="Aurora Watcher" className="w-8 h-8 rounded-lg" />
                 <span className="font-bold text-xl tracking-tight">Aurora Watcher</span>
            </div>
            <a href="https://github.com/Louis-He/aurora_watcher_public/discussions" className="hidden sm:block text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Support
            </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;