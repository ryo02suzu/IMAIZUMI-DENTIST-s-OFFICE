import { cn } from "@/lib/utils";

interface PlaceholderProps {
  className?: string;
  text?: string;
}

export function Placeholder({ className, text = "写真準備中" }: PlaceholderProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center bg-gray-200/80 text-gray-400 border border-gray-300 overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" 
          className="opacity-50"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
        <span className="text-sm font-medium tracking-wider">{text}</span>
      </div>
    </div>
  );
}
