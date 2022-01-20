import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../services/config';
// import NoImage from '../assets/images/no_image.jpg';
import useHomeFetch  from './hooks/useHomeFetch';
import HeroImage from './HeroImage';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  return (
    <>
      { state.results[0] === undefined ? null : 
        (
          <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0][0].backdrop_path}`} 
            text={state.results[0][0].overview} 
            title={state.results[0][0].original_title}
          /> 
        )
      }
    </>
  )
}

export default Home;