import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => (
          <div>
          <h1>Name: {movie.title}</h1>
          <p>Time: {movie.time}</p>
          <p>Genres: {movie.genres.map((genre) => (
            <li>{genre}</li>))}</p>
          </div> 
        ))}
    </div>
  );
};

export default Movies;
