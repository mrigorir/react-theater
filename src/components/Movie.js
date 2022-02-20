import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../services/config';
import useMovieFetch from './hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import MovieInfo from './MovieInfo';
import Spinner from './Spinner';
import Error404 from './Error/Error404';
import NoImage from '../assets/images/no_image.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(loading);
  return (
    <>
      { error && <Error404 /> }
      { loading && <Spinner /> }
      <BreadCrumb movieTitle={state.original_title} />
      <MovieInfo movie={state} />
    </>
  )
};

export default Movie;
