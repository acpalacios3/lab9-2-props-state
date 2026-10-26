import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  return (
    //  grid-cols-1 sm:grid-cols-3  Responsive layout: 1 column on small screens and 3 columns on screens 640px or wider
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-gray-300 rounded-md p-4" >

      <div>

        {/* Display the total number of characters */}
        <p className="text-sm text-slate-500 text-center">
          Characters:
        </p>

        <p className="mt-2 text-2xl font-bold text-slate-700 text-center">
          {stats.characterCount}
        </p>

      </div>

      <div>
        {/* Display the total number of words */}
        <p className="text-sm text-slate-500 text-center">
          Words:</p>

        {/* If the word count is less than 25 or greater than 100, use the color red; otherwise, use the color green. */}
        <p
          className={`mt-2 text-2xl font-bold text-center ${stats.wordCount < 25 || stats.wordCount > 100
            ? "text-red-500"
            : "text-green-500"
            }`}
        >
          {stats.wordCount}
        </p>

        <p className="mt-2 text-xs text-slate-500 text-center">
          Min: 25 | Max: 100
        </p>
      </div>


      <div>
        {/* Show reading time only when showReadingTime is true */}
        {showReadingTime && (
          <div>
            <p className="text-sm text-slate-500 text-center">Reading Time</p>
            <p className="mt-2 text-2xl font-bold text-slate-700 text-center">

              {/* Math.floor(stats.readingTime / 60): gets the minutes.
                    stats.readingTime % 60: gets the remaining seconds.
                    padStart(2, "0"): adds a leading zero if the seconds are less than 10. */}

              {`${Math.floor(stats.readingTime / 60)}: ${String(stats.readingTime % 60).padStart(2, "0")

                }`}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}


