// Component Implementation:

// Implement each component according to its interface requirements.
// Use useState to manage text input and statistics.
// Implement event handlers for text changes.
// Calculate statistics in real-time.


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

        // Estimate reading time in seconds (200 words per minute).
        readingTime: Math.ceil(
            (textInput.trim() === "" ? 0 : textInput.trim().split(/\s+/).length) * 60 / 200),
    };

    return (

        <div className="min-h-screen bg-gray-50 p-5">
            <div className="mx-auto max-w-md space-y-5">

                <div className="font-bold p-5 ">Character Counter Application

                    {/* Pass the callback to the child component */}
                    <TexInput onTextChange={handleTextChange} />
                    <StatsDisplay stats={stats} />
                </div>

            </div>
        </div>

    );
}

