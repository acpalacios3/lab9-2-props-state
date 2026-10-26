import type { StatsDisplayProps } from "../../types";

// types/index.ts
// export interface TextStats {
//   characterCount: number;
//   wordCount: number;
//   readingTime: number; // in minutes
// }

// export interface StatsDisplayProps {
//   stats: TextStats;
//   showReadingTime?: boolean;
// }


export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  return (
    <div>
      {/* <h2>Stats Display</h2> */}

      {/* Display the total number of characters */}
      <p className="text-sm text-slate-500">
        Characters:
      </p>   
        
      <p className="mt-2 text-2xl font-bold text-slate-700">  
        {stats.characterCount}
      </p>

      
      {/* Display the total number of words */}
      <p className="text-sm text-slate-500">
        Words:</p>
      
        <p className="mt-2 text-2xl font-bold text-red-500"> 
         {stats.wordCount}
         </p>

         <p className="mt-2 text-xs text-slate-500">
            Min: 25 | Max: 100
          </p>

      {/* Show reading time only when showReadingTime is true */}
      {showReadingTime && (
        <div >
          <p className="text-sm text-slate-500">Reading Time</p>
          <p className="mt-2 text-2xl font-bold text-slate-700">
            {stats.readingTime}:00
          </p>
        </div>
      )}
    </div>
  );
}


