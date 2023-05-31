import ToDoListItem from "./ToDoListItem";
import ToDoListHeader from "./ToDoListHeader";
import react, { useState } from 'react';

function ToDoList(props) {
  
  // [nombreVariableInicial, funcionQueActualizaLaVariable] = useState(valorVariableInicial)
  const [myTasks, setTasks] = useState(props.tasksData);
  const [hideCompleted, setToggleCompleted] = useState(false);
  const [count, setCount] = useState(0);
  
  const toggleItem = (itemID) => {
    // get the array myTask
    const updatedTasks = [...myTasks];
    // find the item with itemID
    updatedTasks.forEach( item => {
      if (item._id == itemID) {
        // change the property isDone from true to false, or false to true.
        item.isDone = !item.isDone;
        if (item.isDone) {
          setCount(count + 1);
        } else {
          setCount(count - 1);
        }
      }
    });
    setTasks(updatedTasks);
  }

  const toggleCompleted = () => {
    setToggleCompleted(!hideCompleted);
  }

  return (
    <div>  
      <ToDoListHeader count={count} areCompletedTasksHidden={hideCompleted} toggleCompleted={toggleCompleted} />
      {myTasks.map( item => {
         if (!hideCompleted  || !item.isDone) {
            return <ToDoListItem item={item} key={item._id} markItem={toggleItem} />;
          }
        }
      )}
    </div>
  )
}

export default ToDoList;