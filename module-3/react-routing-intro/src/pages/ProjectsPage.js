// src/pages/ProjectsPage.js
import { useState, useEffect } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

function ProjectsPage(props) {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(props.projects);
    setAllProjects(props.projects);
  }, [props.projects]);

  const handleSearchQuery = (event) => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
    const filteredProjects = allProjects.filter( item => item.name.indexOf(searchQuery) > -1 );
    setProjects(filteredProjects);
  }

  const deleteItem = (itemId) => {
    // const filteredProjects = [...projects];
    const filteredProjects = [...projects].filter( item => item._id !== itemId);
    setProjects(filteredProjects);
    console.log(itemId);
  }
  
  
  if (!isLoggedIn) return <Navigate to="/error" />;
  
  return (
    <div>
      <h2>Projects</h2>
      <label>
        Search: <input type="text" value={searchQuery} onChange={ handleSearchQuery } />

      </label>
      { searchQuery && <h3>Searching for:  { searchQuery } </h3> }
      
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            <h3>
              <Link to={`/projects/${project._id}`}>{project.name}</Link>
            </h3>
            <p>{project.technologies} - 
              <a href="#" onClick={ () => deleteItem(project._id) }>Delete</a></p>
            <hr/>
          </div>
        );
      })}

    </div>
  );
}

export default ProjectsPage;
