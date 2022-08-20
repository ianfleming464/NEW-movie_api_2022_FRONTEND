import Movie from './Movie';
import './MovieList.css';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <Container fluid>
      <div>
        <Row className='m-auto align-self-center gy-3'>
          {movies.map(movie => (
            <Col key={movie.id} xs={6} md={3}>
              <Movie
                title={movie.title}
                description={movie.description}
                genre={movie.genre}
                image={movie.image}
                onMovieClick={onMovieClick}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MovieList;
