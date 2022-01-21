import React from 'react';
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, results }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>
      {results.results[0].map( movie => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))}
    </Content>
  </Wrapper>
);

export default Grid;