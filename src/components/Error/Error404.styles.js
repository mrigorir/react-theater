import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: var(--white);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

const Span = styled.span`
  color: var(--white);
  font-size: 120px;
  font-weight: bold;
  background-color: red;
  padding: 0 60px 0 60px;
  border-radius: 100%;
`;

const Title = styled.h1`

`;

const Button = styled.button`

`;

export { Container, Wrapper, Span, Title, Button };