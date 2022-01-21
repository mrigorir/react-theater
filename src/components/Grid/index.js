import React from 'react';
import PropTypes from 'prop-types';
import NoImage from '../../assets/images/no_image.jpg';
import { Wrapper, Content } from './Grid.styles';
import Thumb from '../Thumb';

const Grid = ({ header, results, posterSize, imageUrl }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>
      {results.results[0].map( movie => (
        <Thumb 
          key={movie.id}
          movieId={movie.id} 
          clickcable={true} 
          image={movie.poster_path 
            ? `${imageUrl}${posterSize}${movie.poster_path}` 
            : NoImage 
          } />
      ))}
    </Content>
  </Wrapper>
);

Grid.propTypes = { 
  header: PropTypes.string.isRequired,
  posterSize: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  results: PropTypes.oneOfType([PropTypes.object]).isRequired, 
}

export default Grid;