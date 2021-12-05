import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SplitPane } from './components/SplitPane';
import { LeftSidebar } from './components/LeftSidebar';
import { Toy } from './components/Toy';
import { ToyType } from './types/toy';


function App() {
  const [toy, setToy] = useState<ToyType>(ToyType.json_lint);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <img src={logo} className="logo" alt="logo" />
          ToyChest.dev
        </div>
      </header>
      <SplitPane>
        <LeftSidebar setToy={setToy} />
        <Toy toy={toy} />
      </SplitPane>
    </div>
  );
}

export default App;
