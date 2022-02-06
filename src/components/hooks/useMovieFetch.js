import { useState, useCallback } from 'react';
import { useEffect } from 'react/cjs/react.development';
import apiSettings from '../../services/API';

const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovie = useCallback (async () => {
    try {
      setLoading(true);
      setError(false);

      const { fetchMovie, fetchCredits } = apiSettings;

      const movie = await fetchMovie(movieId)
      const credits = await fetchCredits(movieId);
      // get directors only
      const directors = credits.crew.filter(member => member.job === 'Director'); // lol

      setState({
        ...movie,
        actors: credits.cast,
        directors
      });

      setLoading(false);

    } catch (error) {
      setError(true);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [movieId, fetchMovie]);

  return { state, loading, error };
}

export default useMovieFetch;