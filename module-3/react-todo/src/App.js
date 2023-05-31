import tasksData from './data/tasks.json';
import ToDoList from './components/ToDoList';
import './App.css';
import React, { useState } from 'react';


function App() {

  return (
    <div>
      <ToDoList tasksData={tasksData} />
    </div>
  );
}
  
export default App;
  