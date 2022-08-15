import { Button, Card } from 'react-bootstrap';
import './Movie.css';

const Movie = props => {
  return (
    <div>
      <Card className='movie-card'>
        <Card.Img variant='top' src={props.image} alt='' />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='movie-title text-center'>{props.title}</Card.Title>
          <Card.Text className='movie-description text-justify'>{props.description}</Card.Text>
          <Button className='mt-auto' variant='outline-secondary'>
            Open
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
