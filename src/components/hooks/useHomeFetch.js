import { useState, useEffect, useRef } from 'react';
import apiSettings from '../../services/API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef();

  const handleSearchValue = (ref, e) => {
    e.preventDefault();
    setSearchTerm(ref.current.value);
  }

  
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      
      const { fetchMovies } = apiSettings;
      const movies = await fetchMovies(searchTerm, page);
      
      console.log('old state');
      console.log(state);
      
      setState(prev => ({
        ...movies,
        results:
        page > 1 ? [...prev.results, ...movies.results] : [...movies.results] // lolazo
      }));

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  return { state, loading, error, searchRef, handleSearchValue, searchTerm, setIsLoadingMore };
}

export default useHomeFetch;
