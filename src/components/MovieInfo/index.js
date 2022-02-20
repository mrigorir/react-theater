import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../services/config';
import NoImage from '../../assets/images/no_image.jpg';
import { Wrapper, Content, Text } from './MovieInfo.styles';
import Thumb from '../Thumb';

const MovieInfo = ({ movie }) => {
  console.log(movie);
  const { directors, poster_path, original_title, title, overview, vote_average } = movie;
  return (
    <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb 
        image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}` : NoImage } 
        clickable={false}
        title={original_title}
      />
      <Text>
        <h1 style={{ color: 'black' }}> {title} </h1>
        <h3> PLOT </h3>
        <p> {overview} </p>
      </Text>
      <div className="rating-directors">
        <div>
          <h3> RATING </h3>
          <div className="score"> {vote_average} </div>
        </div>
       {movie.directors ? 
        (
          <div className="director">
            <h3> DIRECTOR{directors.length > 1 ? 'S' : '' } </h3>
              {directors.map((director) => (
                <p key={director.credit_id} style={{ color: 'black' }}> {director.name} </p>
             ))}
          </div>  
        ) : ''
       }
      </div>
    </Content>
  </Wrapper>
  )
};

export default MovieInfo;