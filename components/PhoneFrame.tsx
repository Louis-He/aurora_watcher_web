import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-950 text-white relative">
        {/* Dynamic Island Placeholder */}
        <div className="absolute top-0 w-full flex justify-center z-20 pt-2">
            <div className="h-7 w-28 bg-black rounded-full"></div>
        </div>
        {/* Status Bar Mock */}
        <div className="absolute top-0 w-full flex justify-between px-6 pt-3 z-10 text-[10px] font-semibold text-white">
            <span>22:56</span>
            <div className="flex gap-1">
                <span className="w-4 h-2.5 bg-white rounded-sm"></span>
            </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
