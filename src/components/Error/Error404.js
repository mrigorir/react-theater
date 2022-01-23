import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Span, Title, Button } from './Error404.styles';

const Error404 = () => (
  <Container>
    <Wrapper>
      <Span> ! </Span> 
      <Title> Error 404 </Title>
      <Button> 
        <Link to="/home">
          Back to homepage
        </Link> 
      </Button>
    </Wrapper>
  </Container>
)

export default Error404;
