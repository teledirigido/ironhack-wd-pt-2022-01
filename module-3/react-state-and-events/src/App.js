import './css/styles.css';
import './App.css';

import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = (event) => {
    setTheme(event.target.value);
  }

  const label = 'blablabla';

  return (
    <div className={'App ' + theme}>
      <h1>React - state and events</h1>
      <Counter label={label} />
      <select onChange={ toggleTheme }>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
