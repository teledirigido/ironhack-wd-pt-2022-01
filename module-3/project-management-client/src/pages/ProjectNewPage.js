import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProjectNewPage() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const get_projects_url = 'http://localhost:5005/api/projects'
  const navigate = useNavigate();

  const submitProject = (event) => {
    event.preventDefault();
    axios.post(get_projects_url, { title, description }).then( response => {
      navigate('/projects');
    });
  }

  return (
    <>
      <h1>Adding a new Project</h1>
      <form className="form-full" onSubmit={submitProject}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" value={title} id="title"
            name="title"
            onChange={ (event) => setTitle(event.target.value) } />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <input type="text" value={description} id="description"
            name="description"
            onChange={ (event) => setDescription(event.target.value) } />
        </p>
        <p>
          <button type="submit">Add Project</button>
        </p>
      </form>
    </>
  );
}

export default ProjectNewPage;