import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectNewPage from './pages/ProjectNewPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={ <ProjectsListPage /> } />
        <Route path="/projects/new" element={ <ProjectNewPage /> } />
        <Route path="/projects/:projectId" element={ <ProjectDetailPage /> } />
      </Routes>
    </div>
  );
}

export default App;
