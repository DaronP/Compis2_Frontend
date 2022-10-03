import React, { useState } from 'react';
import './App.css';
import { Editor } from './components/Editor';
import { FileInput } from './components/FileInput';
import { Table } from './components/Table';

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [valueFile, setValueFile] = useState("");
  

  return (
    <div className="App">
      <div className='codes'>
        <Editor
          name="test-textarea"
          value={value}
          onValueChange={(value: string) => setValue(value)}
          numOfLines={30}
        />
        <FileInput />
      </div>
      <Table/>
    </div>
    
  );
}

export default App;
