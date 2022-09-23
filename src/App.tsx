import React, { useState } from 'react';
import './App.css';
import { Editor } from './components/Editor';
import { FileInput } from './components/FileInput';

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [valueFile, setValueFile] = useState("");

  console.log(value)
  

  return (
    <div className="App">
      <Editor
        name="test-textarea"
        value={value}
        onValueChange={(value: string) => setValue(value)}
        numOfLines={30}
      />
      <FileInput />
    </div>
    
  );
}

export default App;
