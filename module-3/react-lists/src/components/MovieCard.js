// src/components/MovieCard.js

function MovieCard(props) {
  const { movie, deleteMovie } = props;

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
        Delete 
      </button>
    </div>
  );
}

export default MovieCard;
