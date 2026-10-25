
import TexInput from "./components/TextInput/TextInput";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";

export default function App() {

  return (
    <div>
      <TexInput />
      <StatsDisplay
        stats={{
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
      }}
/>
      
    </div>
  )
}