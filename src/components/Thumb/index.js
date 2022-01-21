import React from 'react';
import Image from './Thumb.styles';

const Thumb = ({ image, movieId, clickcable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;