import { useState } from 'react';
import type { TextInputProps } from "../../types";


export default function TexInput({
  onTextChange,
  placeholder = "Start Typing your content here...",
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

      <textarea

        className="w-full max-w-full font-normal p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
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




