import { Button, Card } from 'react-bootstrap';
import './Movie.css';

const Movie = ({ image, title, description, onMovieClick }) => {
  return (
    <div>
      <Card className='movie-card'>
        <Card.Img variant='top' src={image} alt='' />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='movie-title text-center'>{title}</Card.Title>
          <Card.Text className='movie-description text-justify'>{description}</Card.Text>
          <Button onClick={() => onMovieClick()} className='mt-auto' variant='outline-secondary'>
            Open
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
