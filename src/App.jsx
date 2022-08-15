import { useState, useEffect } from 'react';
import MovieList from './components/Movies/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://the80smoviesapp.herokuapp.com/movies');
      const responseData = await response.json();
      console.log(responseData);
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

  return (
    <div className='App'>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

// TO DO: remove map function from here, put it in the MovieList comonent! Check the Expense tracker app for example.
