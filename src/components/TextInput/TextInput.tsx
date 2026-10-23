import type { TextInputProps } from "../../types"; 

// export interface TextInputProps {
//   onTextChange: (text: string) => void;
//   placeholder?: string;
//   initialValue?: string;
// }

import { useState } from 'react';
 
export default function TexInput(TextInputProps) {

  const [textValueInput, setText] = useState(TextInputProps.initialValue);
 
  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

   return (
    <form>
      <h2>Text Input</h2>
      <textarea
        className="area-input"
        placeholder ={TextInputProps.placeholder ?? 'Type your Content'}
        value = {textValueInput}
        onChange={handleTextChange}
        rows={4}
      />

    </form>
  );
};




