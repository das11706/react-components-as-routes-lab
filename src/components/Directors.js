import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
          <div>
            <h1>Name: {director.name}</h1>
            <p>Movies: {director.movies.map((movie) => (
            <li>{movie}</li>))}</p>
          </div> 
        ))}
    </div>
  );
}

export default Directors
