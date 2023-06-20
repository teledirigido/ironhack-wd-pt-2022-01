import axios from "axios";
import { useEffect, useState } from "react";
import ProjectTasks from '../components/ProjectTasks';
import { Link, useNavigate, useParams } from "react-router-dom";

 
function ProjectDetailPage() {

  const get_projects_url = 'http://localhost:5005/api'
  const { projectId } = useParams();
  const [project, setProject] = useState([]); 
  const [tasks, setTasks] = useState([]); 
  const navigate = useNavigate();

  const getProject = () => {
    axios.get(`${get_projects_url}/projects/${projectId}`).then( response => {
      setProject(response.data);
      setTasks(response.data.tasks);
    })
  };

  const deleteProject = (event) => {
    event.preventDefault();
    axios.delete(`${get_projects_url}/projects/${projectId}`).then( response => {
      navigate('/projects');
    })
  }

  const addNewTask = (title) => {
    const data = {
      project: projectId,
      title: title,
    }
    axios.post(`${get_projects_url}/tasks/`, data).then( response => {
      const updatedTasks = [...response.data];
      setTasks(updatedTasks);
    });
  }

  const deleteTask = (taskId) => {
    axios.delete(`${get_projects_url}/tasks/${taskId}`).then( response => {
      const updatedTasks = [...response.data];
      setTasks(updatedTasks);
    });
  }

  useEffect( () => {
    getProject();
  }, []) 
  
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ProjectTasks tasksData={tasks} projectId={projectId} addTask={addNewTask} deleteTask={deleteTask} />
      <hr />
      <div className="actions">
        <Link to="/projects">Back to projects</Link>
        <a href="#" onClick={deleteProject}>Delete</a>
      </div>
    </>
  );
}

export default ProjectDetailPage;