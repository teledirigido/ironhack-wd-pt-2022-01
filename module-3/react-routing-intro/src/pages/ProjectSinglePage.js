import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from './../projects-data.json';

function ProjectSinglePage() {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  /*
  const array1 = [5, 12, 8, 130, 44];
  const found = array1.find(element => element > 10);
  console.log(found);
  // Expected output: 12
  */
  useEffect( () => {
    // axios.get(`/myApi/${projectId}`).then( (response) => {
    //   setProject(response.data);
    // });
    const singleProject = projectsData.find( item => item._id === projectId );
    setProject(singleProject);
  }, []);


  return (
    <div>
      <h1>{project.name} - {project.year}</h1>
      <h2>{project.description}</h2>
      <p>Project Single page here 🔥</p>
    </div>
  )
}

export default ProjectSinglePage;