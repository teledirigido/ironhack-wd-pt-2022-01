// src/components/MovieList.js

import { useState } from "react";
import moviesDataJSON from "../data/movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from './AddMovie';
import FilterMovies from './FilterMovies';


function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON);

  const [option, setOption] = useState('All');

  const onFormSubmit = (title, director, hasOscar, IMDBRating) => {
    const updatedMovies = [...movies];
    updatedMovies.push({
      title: title,
      director: director,
      hasOscars: hasOscar,
      IMDBRating: IMDBRating
    });
    /** 
     * En un caso real, conectariamos con una API como Axios de la siguiente forma
     *  axios.post('/add-movie').then( (data) => { setMovies(updatedMovies) })
     **/
    setMoviesData(updatedMovies);
    setMovies(updatedMovies);
  }

  
  const filterMovies = (event) => {
    const filterKeyword = event.target.value;
    const allMovies = [...moviesData];
    // const filteredMovies = [...movies];
    
    const filteredMovies = allMovies.filter( (item) => item.title[0].toLowerCase() === filterKeyword );
    setMovies(filteredMovies);
  }

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie addMovie={onFormSubmit} />
      <FilterMovies handleFilterMovies={filterMovies} />
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
