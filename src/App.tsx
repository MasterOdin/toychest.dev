import { useState } from 'react';

import './App.css';
import { LeftSidebar } from './components/LeftSidebar';
import { SplitPane } from './components/SplitPane';
import { Toy } from './components/Toy';
import logo from './logo.svg';
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
      <SplitPane defaultWidth={250}>
        <LeftSidebar setToy={setToy} />
        <Toy toy={toy} />
      </SplitPane>
    </div>
  );
}

export default App;
