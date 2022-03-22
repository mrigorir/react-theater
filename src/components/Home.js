import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../services/config';
import useHomeFetch  from './hooks/useHomeFetch';
import HeroImage from './HeroImage';
import Grid from './Grid';
import SearchBar from './SearchBar';
import Button from './Button';
import Spinner from './Spinner';

const Home = () => {
  const { state, loading, trouble, searchRef, handleSearchValue, searchTerm, setIsLoadingMore } = useHomeFetch();
  if (trouble) return <div> Plop...! </div>
  return (
    <>
      {state.results[0] !== undefined ? 
        (
          <>
            <HeroImage 
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
              text={state.results[0].overview} 
              title={state.results[0].original_title}
            />
          </>
        ) : null
      }

       <SearchBar searchRef={searchRef} handleSearchValue={handleSearchValue} />
       <Grid header={searchTerm ? 'Seacrh Results' : 'Popular movies'} state={state} posterSize={POSTER_SIZE} imageUrl={IMAGE_BASE_URL} />
       { loading && <Spinner /> }
       { state.page < state.total_pages && !loading && (
         <Button text='Load more' callback={() => setIsLoadingMore(true) } /> //lolazo
       )}  
    </>
  )
}

export default Home;