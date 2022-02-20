import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, title }) => {
  /*onst mapObj = { ":" : "", " " : "-" };
  const title = title.replace(/[:\s+]/g, ((matched) => mapObj[matched])).toLowerCase();*/
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

export default Thumb;