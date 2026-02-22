import { ReactNode } from 'react';

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const TerminalCard = ({ title, children, delay = 0 }: TerminalCardProps) => {
  return (
    <div
      className="relative bg-black/80 border border-[#00FF41]/30 rounded-sm overflow-hidden backdrop-blur-sm animate-fadeIn"
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.1), inset 0 0 60px rgba(0, 255, 65, 0.02)',
      }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-[#00FF41]/10 border-b border-[#00FF41]/20">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF0040]"></span>
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></span>
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#00FF41]"></span>
        </div>
        <span className="ml-2 text-[#00FF41]/70 text-xs md:text-sm font-mono tracking-wider">{title}</span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {children}
      </div>

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
        }}
      />
    </div>
  );
};

export default TerminalCard;
