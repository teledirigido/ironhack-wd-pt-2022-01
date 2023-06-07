import { Routes, Route } from 'react-router-dom';

import './App.css';

// JSON
import projectsData from "./projects-data.json";

// Page
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectSinglePage from './pages/ProjectSinglePage';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/projects" element={ <ProjectsPage projects={projectsData} /> } />
        <Route path="/projects/:projectId" element={ <ProjectSinglePage /> } />

        <Route path="*" element={ <ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
