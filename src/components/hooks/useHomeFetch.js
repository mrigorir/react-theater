import { useState, useEffect, useRef } from 'react';
import { isPersistedState } from '../../logic/helpers';
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
  const [trouble, setTrouble] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const searchRef = useRef();

  const handleSearchValue = (ref, e) => {
    e.preventDefault();
    setSearchTerm(ref.current.value);
  }

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setTrouble(false);
      setLoading(true);
      
      const { fetchMovies } = apiSettings;
      const movies = await fetchMovies(searchTerm, page);
      
      setState(prev => ({
        ...movies,
        results:
        page > 1 ? [...prev.results, ...movies.results] : [...movies.results] // lolazo
      }));

    } catch (error) {
      setTrouble(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  return { state, loading, trouble, searchRef, handleSearchValue, searchTerm, setIsLoadingMore };
}

export default useHomeFetch;
