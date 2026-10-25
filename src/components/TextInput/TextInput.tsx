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
}:TextInputProps) {

  const [textValueInput, setValueInput] = useState(initialValue);

 
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

  const newInputText = (event.target.value);
  setValueInput(newInputText);
  onTextChange(newInputText);

  };

   return (
    <form>
      <h2>Text Input</h2>
      <textarea
        className="area-input"
        placeholder ={placeholder}
        value = {textValueInput}
        onChange={handleTextChange}
        rows={4}
      />

    </form>
  );
};




