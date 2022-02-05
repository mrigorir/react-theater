import { useState, useEfect } from  'react';
import { useEffect } from 'react/cjs/react.development';
import apiSettings from '../../services/API';

const movieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

    }
  }, [movieId]);

  return { state, loading };
}