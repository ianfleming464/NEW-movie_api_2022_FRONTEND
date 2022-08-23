import { useState, useEffect } from 'react';
import MovieList from './components/Movies/MovieList';
import MovieView from './components/Movies/MovieView';
import LoginView from './components/Register/Login/LoginView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          year: responseData[key].Year,
          director: responseData[key].Director,
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
      {!isLoggedIn && <LoginView />}
      {selectedMovie && <MovieView movie={selectedMovie} />}
      {isLoggedIn && !selectedMovie && (
        <MovieList movies={movies} onMovieClick={movieClickHandler} />
      )}
    </>
  );
}

export default App;

// TO DO: complete MovieView component using an alternative to a Bootstrap Media card object. Build the button
// to switch between the movie view component and the main view, then i can move on to exercise 4
// https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-media-objects.php
