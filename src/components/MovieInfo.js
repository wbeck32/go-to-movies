import React from 'react';
import PropTypes from 'prop-types';

MovieInfo.propTypes = {
  selectedMovie: PropTypes.object,
}

export function MovieInfo({selectedMovie}) {
  return (
  <div className="movieInfo">
  <div><span>title: </span>{selectedMovie.Title}</div>
  <div><span>release date: </span>{selectedMovie.Released}</div>
  <div><span>rating: </span>{selectedMovie.Rated}</div>
  <div><span>cast: </span>{selectedMovie.Actors}</div>
  <div><span>directed by: </span>{selectedMovie.Director}</div>
  <div><span>written by: </span>{selectedMovie.Writer}</div>
  <div><span>country: </span>{selectedMovie.Country}</div>
  <div><span>synopsis: </span>{selectedMovie.Plot}</div>
  <div><a href="http://www.imdb.com/title/{selectedMovie.imdbId}"><span>more info at imdb</span></a></div>
</div>
  );
}