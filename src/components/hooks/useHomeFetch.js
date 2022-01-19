import { useState, useEffect } from 'react';
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
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { state, loading, error };
}

export default useHomeFetch;
