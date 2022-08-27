import { useState, useEffect } from 'react';
import MovieList from './components/Movies/MovieList';
import MovieView from './components/Movies/MovieView';
import LoginView from './components/Login-Registration/LoginView';
// import RegistrationView from './components/Login-Registration/RegistrationView';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const onLoggedIn = user => {
    setIsLoggedIn(user);
  };

  return (
    <>
      {/* {!isLoggedIn && <RegistrationView />} */}
      {!isLoggedIn && <LoginView onLoggedIn={user => onLoggedIn(user)} />}
      {selectedMovie && (
        <MovieView movie={selectedMovie} previous={movie => movieClickHandler(!movie)} />
      )}
      {isLoggedIn && !selectedMovie && (
        <MovieList movies={movies} onMovieClick={movieClickHandler} />
      )}
    </>
  );
}

export default App;

// TO DO: decide regarding state. Boolean becomes a string, falsy (literally false) becomes truthy, following instructions. POST request usnig the fetch api. How to send the relevant info via fetch to the back? Headers, body?
