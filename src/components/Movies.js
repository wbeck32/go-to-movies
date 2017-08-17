import React from 'react';
import PropTypes from 'prop-types';

Movie.propTypes = {
  movie: PropTypes.object
}

Movies.propTypes = {
  movies: PropTypes.object
}

export function Movies({movies}) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <Movie movie={movie}/>
        </li>
      ))}
    </ul>
  );
}

export function Movie({movie}) {
  return (
    <div>
      <span>{movie.Title}!</span>
      <img src={movie.Poster} style={{
        width: 100
      }}/>
    </div>
  );
}