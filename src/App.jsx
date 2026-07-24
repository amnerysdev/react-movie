import { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';
import {
  fetchMovies,
  getTrendingMovies,
  updateSearchCount,
} from './services/movieService';

import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  const loadSearchResults = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const results = await fetchMovies(query);
      setMovies(results);

      if (query.trim() && results.length === 0) {
        setErrorMessage('No movies found for this search.');
      }

      if (query.trim() && results.length > 0) {
        updateSearchCount(query, results[0]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Failed to fetch movies. Please try again later.');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      setTrendingMovies([]);
    }
  };

  useEffect(() => {
    const loadResults = async () => {
      await loadSearchResults(debouncedSearchTerm);
    };
    loadResults();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : movies.length > 0 ? (
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">Search for a movie or wait for popular results to appear.</p>
          )}
        </section>
      </div>
    </main>
  );
}


export default App
