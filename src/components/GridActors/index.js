import React from 'react';
import { Wrapper, Content } from '../Grid/Grid.styles';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../services/config';
import Actor from '../Actor';
import NoImage from '../../assets/images/no_image.jpg';

const GridActors = ({ header, movie }) => {
  const { actors } = movie;
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>
        {
          actors !== undefined ? 
          (
            actors.map((actor) => {
              const { credit_id, name, character, profile_path } = actor;
              return (
                <Actor 
                  key={credit_id} 
                  name={name} 
                  character={character} 
                  imageUrl={profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}` : NoImage } 
                />  
              );
            })
          ) : ''
        }
      </Content>
    </Wrapper>
  )
}

export default GridActors;