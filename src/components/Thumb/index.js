import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, title }) => {
  const map = { ":" : "", " " : "-" };
  if (title !== undefined) title = title.replace(/[:\s+]/g, ((matched) => map[matched])).toLowerCase();
  return (
  <div>
    { clickable ? (
      <Link to={ `${title}/${movieId}` }>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
  )
};

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.string,
  clickable: PropTypes.string,
  title: PropTypes.string,
}

export default Thumb;