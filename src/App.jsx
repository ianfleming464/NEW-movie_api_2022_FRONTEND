import { useState, useEffect } from 'react';
import MovieList from './components/Movies/MovieList';
import MovieView from './components/Movies/MovieView';
import LoginView from './components/Login/Register/LoginView';

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
      {/* {!user && <LoginView onLoggedIn={user => onLoggedIn(user)} />} */}
      {!isLoggedIn && <LoginView onLoggedIn={user => onLoggedIn(user)} />}
      {selectedMovie && <MovieView movie={selectedMovie} />}
      {isLoggedIn && !selectedMovie && (
        <MovieList movies={movies} onMovieClick={movieClickHandler} />
      )}
    </>
  );
}

export default App;

// TO DO: decide regarding state. Boolean becomes a string, following instructions. There must be a better way. Practically speaking, for now, try the exercise. Implement at least a dummy registration mode. ALSO fix the name of the login folder. Too many ///s
