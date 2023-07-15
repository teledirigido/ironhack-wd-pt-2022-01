import { useState } from "react";
import axios from "axios";

const API_URL = "/backend";

function AddProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleTitle = (e) => {
    flushErrors();
    setTitle(e.target.value);
  }
  const handleDescription = (e) => {
    flushErrors();
    setDescription(e.target.value);
  }
  const flushErrors = () => {
    setError('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description };
    const storedToken = localStorage.getItem('authToken');
    
    if (!storedToken){
      setError('Token Error');
    }

    axios
      .post(
        `${API_URL}/api/projects`, 
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}`} },
      )
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshProjects();
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };


  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      { error &&  <div style={{ paddingBottom: '1rem'}}>{error}</div> }

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitle}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;