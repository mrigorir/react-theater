import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieFetch from './hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import GridActors from './GridActors';
import Spinner from './Spinner';
import Error404 from './Error/Error404';

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  const { original_title, runtime, budget, revenue } = movie;
  return (
    <>
      { error && <Error404 /> }
      { loading && <Spinner /> }
      <BreadCrumb movieTitle={original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={runtime} budget={budget} revenue={revenue} />
      <GridActors header="Actors" movie={movie} />
    </>
  )
};

export default Movie;
