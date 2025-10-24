import React, { useState, useEffect } from 'react';
import { getTopRatedMovies } from 'src/api/tmdb-api'; 
import MovieList from 'src/components/movieList';

const TopRatedMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <div>
      <h2>Top Rated</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRatedMoviesPage;