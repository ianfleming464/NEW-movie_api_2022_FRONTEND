import './MovieView.css';

const MovieView = ({ movie }) => {
  const { id, title, description, genre, image } = movie;
  return (
    <div class='d-flex'>
      <div class='flex-shrink-0'>
        <img src={image} alt='...'></img>
        <h1>{title}</h1>
      </div>
      <div class='flex-grow-1 ms-3'>{description}</div>
    </div>
  );
};

export default MovieView;
