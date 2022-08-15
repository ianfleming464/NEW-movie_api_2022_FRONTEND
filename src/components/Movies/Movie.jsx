import './Movie.css';

const Movie = props => {
  console.log(props);
  return (
    <div className='movie'>
      <h4>{props.title}</h4>
      <p className='movie__description'>{props.description}</p>
      <img className='poster' src={props.image} alt='' />
    </div>
  );
};

export default Movie;
