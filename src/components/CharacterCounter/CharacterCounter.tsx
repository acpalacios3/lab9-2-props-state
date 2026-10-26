// Component Implementation:

// Implement each component according to its interface requirements.
// Use useState to manage text input and statistics.
// Implement event handlers for text changes.
// Calculate statistics in real-time.


// types/index.ts
// export interface CharacterCounterProps {
//   minWords?: number;
//   maxWords?: number;
//   targetReadingTime?: number; // in minutes
// }

import { useState } from "react";
import TexInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";


export default function CharacterCounter() {
    // useState for text entered
    const [textInput, setInput] = useState("");

    // Handle text changes received from the TextInput component
    function handleTextChange(newText: string) {
        setInput(newText);
    }

    // Calculates
    const stats = {
        characterCount: textInput.length,
        // split divides the text each time it encounters a space
        wordCount: textInput.trim() === "" ? 0 : textInput.trim().split(/\s+/).length,

        // Estimate reading time based on 200 words per minute, Math.ceil rounds up to the next whole minute.
        readingTime: Math.ceil(
            (textInput.trim() === "" ? 0 : textInput.trim().split(/\s+/).length) / 200),
    };

    return (

        <div className="min-h-screen bg-gray-50 p-5">
            <div className="mx-auto max-w-md space-y-5">

                <div>Character Counter

                    {/* Pass the callback to the child component */}
                    <TexInput onTextChange={handleTextChange} />
                    <StatsDisplay stats={stats} />
                </div>

            </div>
        </div>

    );
}

