import Movie from './Movie';
import './MovieList.css';
import Card from '../UI/Card';

const MovieList = props => {
  console.log(props);
  return (
    <Card className='movies'>
      {props.movies.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          description={movie.description}
          genre={movie.genre}
          image={movie.image}
        />
      ))}
    </Card>
  );
};

export default MovieList;
