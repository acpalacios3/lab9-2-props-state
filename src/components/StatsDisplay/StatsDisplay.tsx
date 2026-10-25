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
}: StatsDisplayProps) 

{
  return (
    <div>
      <h2>Stats Display</h2>

      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>

      {showReadingTime && (
        <p>Reading Time: {stats.readingTime} minutes</p>
      )}
    </div>
  );
}


