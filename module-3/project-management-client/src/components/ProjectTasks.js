import axios from "axios";
import { useEffect, useState } from "react";

function ProjectTasks(props) {
  const {tasksData, addTask, deleteTask } = props;
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const get_projects_url = 'http://localhost:5005/api';
  

  const submitForm = (event) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  const onClickDelete = (event) => {
    event.preventDefault();
    const taskId = event.currentTarget.dataset.index;
    deleteTask(taskId);
  }

  useEffect( () => {
    setTasks(tasksData);
  }, [tasksData]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        { tasks.map( item => {
          return (
            <p key={item._id}>{item.title} - <a href="#" data-index={item._id} onClick={onClickDelete}>Delete</a></p>
          )
        })}
      </ul>
      <div>
        <form className="form-inline" onSubmit={submitForm}>
          <input type="text" value={newTask}
            placeholder="Add your new task"
            onChange={ (event) => setNewTask(event.target.value) }/>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default ProjectTasks