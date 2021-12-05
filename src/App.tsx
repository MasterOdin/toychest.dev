import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SplitPane } from './components/SplitPane';
import { LeftSidebar } from './components/LeftSidebar';
import { JsonLint, YamlLint } from './components/toys';
import { Toy } from './components/toy';
import { ToyEnum } from './components/toy/enum';


function App() {
  const [toy, setToy] = useState<Toy>(Toy.json_lint);

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
