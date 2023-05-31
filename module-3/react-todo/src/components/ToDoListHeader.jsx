
function ToDoListHeader(props) {
  return (    
    <div>
      <h2>
        Today I have done {props.count} things
      </h2>
      <button onClick={ () => props.toggleCompleted() }>{ props.areCompletedTasksHidden ? 'Show Completed' : 'Hide Completed' }</button>
      <hr />
    </div>
  )
}

export default ToDoListHeader;