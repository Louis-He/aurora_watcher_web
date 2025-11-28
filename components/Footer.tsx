import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">Aurora Watcher</h3>
                <p className="text-slate-500">Your companion for the northern night sky in Canada, built in Canada 🇨🇦.</p>
            </div>
            <div className="flex gap-8 text-slate-400">
                <a href="https://github.com/Louis-He/aurora_watcher_public/blob/main/Privacy.md" className="hover:text-white transition-colors">Privacy</a>
                <a href="https://github.com/Louis-He/aurora_watcher_public/discussions" className="hover:text-white transition-colors">Support</a>
            </div>
        </div>
        <div className="text-center text-slate-600">
            &copy; {new Date().getFullYear()} Aurora Watcher. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
