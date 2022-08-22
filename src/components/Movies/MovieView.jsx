import './MovieView.css';
import { Button } from 'react-bootstrap';

const MovieView = ({ movie }) => {
  const { id, title, description, genre, image, director, year } = movie;
  console.log(director);
  return (
    <div className='parent'>
      <div className='view-card'>
        <div className='view-card-thumbnail'>
          <img src={image} alt=''></img>
        </div>
        <div className='view-card-body'>
          <span className='view-card-title'>{title}</span>

          <p className='view-card-p'>Year: {year}</p>
          <p className='view-card-p'>Genre: {genre.Name}</p>
          <p className='view-card-p'>Director: {director.Name}</p>

          <p className='view-card-description'>{description}</p>

          <Button className='mt-auto' variant='outline-secondary'>
            {' '}
            <i className='fas fa-play'></i> Back to Main View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
