import { useState, useEffect } from 'react';
import MovieList from './components/Movies/MovieList';
import MovieView from './components/Movies/MovieView';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://the80smoviesapp.herokuapp.com/movies');
      const responseData = await response.json();
      const loadedMovies = [];
      for (const key in responseData) {
        loadedMovies.push({
          id: responseData[key]._id,
          title: responseData[key].Title,
          description: responseData[key].Description,
          genre: responseData[key].Genre,
          image: responseData[key].ImagePath,
        });
      }
      setMovies(loadedMovies);
    };
    fetchMovies();
  }, []);

  const movieClickHandler = movie => {
    setSelectedMovie(movie);
  };

  return (
    <>
      {selectedMovie && <MovieView movie={selectedMovie} />}
      {!selectedMovie && <MovieList movies={movies} onMovieClick={movieClickHandler} />}
    </>
  );
}

export default App;

// TO DO: complete MovieView component using a Bootstrap Media card object. Build the button
// to switch between the movie view component and the main view, then i can move on to exercise 4
