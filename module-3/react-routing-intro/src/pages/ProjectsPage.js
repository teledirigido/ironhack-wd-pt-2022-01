// src/pages/ProjectsPage.js
import { useState, useEffect } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  
  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  }
  
  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    console.log('Rendering Project data');
    setProjects(props.projects);
  }, [props.projects]);
  
  if (!isLoggedIn) return <Navigate to="/error" />;
  
  return (
    <div>
      <h2>Projects</h2>
      <input type="text" value={searchQuery} onChange={ handleSearchQuery } />
      { searchQuery && <h3>Searching for:  { searchQuery } </h3> }
      
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>
              <Link to={`/projects/${project._id}`}>{project.name}</Link>
            </h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}

    </div>
  );
}

export default ProjectsPage;
