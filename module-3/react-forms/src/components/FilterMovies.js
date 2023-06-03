import { useState } from "react";

function FilterMovies(props) {
  
  return (
    <div>
      <label>Filter Movie: </label>
      <select onChange={props.handleFilterMovies}>
        <option value="all" key="all">ALL</option>
        <option value="a" key="a">A</option>
        <option value="c" key="c">C</option>
      </select>
    </div>
  )
}

export default FilterMovies;