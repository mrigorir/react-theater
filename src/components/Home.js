import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../services/config';
import useHomeFetch  from './hooks/useHomeFetch';
import HeroImage from './HeroImage';
import Grid from './Grid';
import SearchBar from './SearchBar';
// import Spinner from './Spinner';

const Home = () => {
  const { state, loading, error, searchRef, handleSearchValue } = useHomeFetch();
  return (
    <>
      { state.results[0] === undefined ? null : 
        (
          <>
            <HeroImage 
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0][0].backdrop_path}`} 
              text={state.results[0][0].overview} 
              title={state.results[0][0].original_title}
            />
            <SearchBar searchRef={searchRef} handleSearchValue={handleSearchValue} />
            <Grid header='Popular movies' results={state} posterSize={POSTER_SIZE} imageUrl={IMAGE_BASE_URL} />
          </>
        )
      }    
    </>
  )
}

export default Home;