import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { KP_DATA } from '../constants';
import { Cloud, Moon, Navigation } from 'lucide-react';

export const GeoConditionScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black pt-12 px-4 pb-4 overflow-hidden relative font-sans">
      <h2 className="text-2xl font-bold mb-4 text-white">Real-Time</h2>
      
      {/* G-Scale Card */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 mb-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="flex justify-between items-start">
            <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider">NOAA G-Scale</span>
                <div className="mt-2 w-20 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <span className="text-3xl font-bold text-black">G0</span>
                </div>
            </div>
            <div className="text-right">
                <span className="text-xs text-gray-400 block mb-1">Intensity</span>
                <span className="text-lg font-bold text-white">Low</span>
            </div>
        </div>
        <div className="mt-4 pt-2 border-t border-gray-800">
             <span className="text-[10px] text-gray-500">Last reading: 2025-11-26, 22:53</span>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-white">Geo Condition Forecast</h2>

      {/* 3 Day Forecast Row */}
      <div className="bg-gray-900 rounded-2xl p-4 flex justify-between mb-4 border border-gray-800">
        {[
            { day: 'Wed', date: 'Nov 26', label: 'Low', icon: '〰️' }, // Using emoji for simplicity in recreation
            { day: 'Thu', date: 'Nov 27', label: 'Low', icon: '〰️' },
            { day: 'Fri', date: 'Nov 28', label: 'Calm', icon: '☰' },
        ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-gray-300 font-medium">{item.day}</span>
                <span className="text-[9px] text-gray-500">{item.date}</span>
                <span className="text-xs text-yellow-500 my-1">{item.icon === '〰️' ? <WavesIcon /> : <BarsIcon />}</span>
                <span className="text-xs font-semibold text-white">{item.label}</span>
            </div>
        ))}
      </div>

      {/* KP Forecast Chart */}
      <div className="bg-gray-900 rounded-2xl p-4 flex-1 border border-gray-800 flex flex-col">
        <h3 className="text-sm font-semibold text-gray-300 mb-2">KP Forecast</h3>
        <div className="flex-1 w-full -ml-4">
            <ResponsiveContainer width="115%" height="100%">
                <AreaChart data={KP_DATA}>
                    <defs>
                        <linearGradient id="colorKp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="time" tick={{fontSize: 9, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 9]} />
                    <Area type="monotone" dataKey="kp" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorKp)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Nav Simulation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-slate-900/90 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center border border-white/10 shadow-lg z-30">
         <div className="flex flex-col items-center opacity-50"><Navigation size={18} /><span className="text-[9px] mt-1">Preview</span></div>
         <div className="flex flex-col items-center text-blue-400"><div className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center text-[10px]">🌍</div><span className="text-[9px] mt-1 font-bold">Geo</span></div>
         <div className="flex flex-col items-center opacity-50"><div className="w-5 h-5 bg-gray-600 rounded-sm"></div><span className="text-[9px] mt-1">Map</span></div>
      </div>
    </div>
  );
};

export const PreviewScreen: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-slate-950 pt-16 px-6 relative overflow-hidden">
             {/* Background Gradients */}
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none"></div>

             <div className="text-center z-10 mt-4">
                 <h1 className="text-3xl font-bold text-white mb-2">Yellowknife</h1>
                 <div className="text-8xl font-bold text-white tracking-tighter mb-2">22%</div>
                 <p className="text-gray-400 text-lg">Aurora probability</p>
             </div>

             <div className="mt-8 bg-indigo-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400">👁️</span>
                 </div>
                 <span className="text-sm font-medium text-gray-200">Very poor viewing conditions</span>
             </div>

             <div className="mt-8 space-y-6">
                 <div className="flex items-center gap-4">
                    <Cloud className="text-gray-400 w-6 h-6" />
                    <span className="text-white font-medium">High cloud cover</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <Moon className="text-gray-400 w-6 h-6" />
                    <span className="text-white font-medium">Very high light pollution</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <Navigation className="text-gray-400 w-6 h-6 transform rotate-45" />
                    <span className="text-white font-medium">62.471, -114.405</span>
                 </div>
             </div>
             
             {/* Bottom Sheet Hint */}
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
    )
}

// Simple icons for the chart row
const WavesIcon = () => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-yellow-500">
        <path d="M1 8C3 8 3 2 5 2C7 2 7 8 9 8C11 8 11 2 13 2" />
    </svg>
)

const BarsIcon = () => (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-green-500">
        <path d="M1 2H13M1 6H13M1 10H13" />
    </svg>
)
