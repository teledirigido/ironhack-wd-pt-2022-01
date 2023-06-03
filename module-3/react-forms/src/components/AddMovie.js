import { useState } from 'react';

function AddMovie(props) {

  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [hasOscar, setHasOscar] = useState(false);
  const [IMDBRating, setIMDBRating] = useState('');


  const handleTitle = (event) => setTitle(event.target.value);
  const handleDirector = (event) => setDirector(event.target.value);
  const handleRating = (event) => setIMDBRating(event.target.value);
  const handleHasOscar = (event) => setHasOscar(event.target.checked);
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addMovie(title, director, hasOscar, IMDBRating);
  };

  /*
  "_id":"1ae22ff0",
  "title":"A Beautiful Mind",
  "director":"Ron Howard",
  "hasOscars":true,
  "IMDBRating":8.2
  */

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" value={title} onChange={handleTitle} />
        </p>
        <p>
          <label htmlFor="director">Director</label>
          <input id="director" type="text" name="director" value={director} onChange={handleDirector} />
        </p>
        <p>
          <input type="checkbox" name="hasOscars" onChange={handleHasOscar} checked={hasOscar} />
          <label id="hasOscar" htmlFor="hasOscars">Has Oscars?</label>
        </p>
        <p>
          <label htmlFor="IMDBRating">Rating</label>
          <input type="number" name="IMDBRating" value={IMDBRating} onChange={handleRating} />
        </p>
        <p>
          <button>Add Movie</button>
        </p>
      </form>
    </div>
  )
}

export default AddMovie;