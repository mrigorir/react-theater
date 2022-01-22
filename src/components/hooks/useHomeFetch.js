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
      
      setState(prev => ({
        ...movies,
        results:
        page > 1 ? [ ...prev.results, movies.results ] : [ movies.results ]
      }));

    } catch (error) {
      setError('Invalid movie, please press f5 to reaload the page');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  useEffect(() => {
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  return { state, loading, error, searchRef, handleSearchValue };
}

export default useHomeFetch;
