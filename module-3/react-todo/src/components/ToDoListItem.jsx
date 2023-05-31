import react from 'react';

function ToDoListItem(props){
  const { item } = props;

  return (
    <div>
      <p>
        {item.name} - {item.description}
        <button onClick={ () => props.markItem(item._id) }>{ item.isDone ? 'Undo' : 'Done' }</button>
      </p>
    </div> 
  )
}

export default ToDoListItem;