import { useState } from 'react';
import type { TextInputProps } from "../../types";

// types/index.ts
// export interface TextInputProps {
//   onTextChange: (text: string) => void;
//   placeholder?: string;
//   initialValue?: string;
// }

export default function TexInput({
  onTextChange,
  placeholder = "Type your content",
  initialValue = "",
}: TextInputProps) {

  const [textValueInput, setValueInput] = useState(initialValue);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    const newInputText = (event.target.value);
    setValueInput(newInputText);
    onTextChange(newInputText);

  };

  return (
    <form>
      {/* <h2>Text Input</h2> */}
      <textarea
        // className="area-input"
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        // className="h-[200px] w-full rounded-lg border border-slate-300 bg-white p-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        placeholder={placeholder}
        value={textValueInput}
        // Call the handler whenever the text changes
        onChange={handleTextChange}
        // Display four rows in the textarea
        rows={4}
      />

    </form>
  );
};




