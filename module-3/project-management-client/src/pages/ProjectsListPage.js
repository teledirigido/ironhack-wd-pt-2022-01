import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectsListPage() {
  const get_projects_url = 'http://localhost:5005/api/projects'
  const [projects, setProjects] = useState([]); 
  const getProjects = () => {
    axios.get(get_projects_url).then( response => {
      setProjects(response.data);
    })
  };

  useEffect( () => {
    getProjects();
  }, []) 
  
  return (
    <>
      <h1>All projects</h1>
      <div>
        { projects.map( item => {
          return (
            <div key={item._id}>
              <h2><Link to={`/projects/${item._id}`}>{item.title}</Link></h2>
              <p>{item.description}</p>
              <hr/>
            </div>
          )
        }) }
      </div>
    </>
  );
}

export default ProjectsListPage;