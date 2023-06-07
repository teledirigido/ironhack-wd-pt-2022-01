import './App.css';
import { useState } from 'react';
import IronbnbList from './components/IronbnbList';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>

      { show && <IronbnbList /> }
    </div>
  );
}

export default App;
