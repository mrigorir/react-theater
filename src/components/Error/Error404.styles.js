import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: var(--white);

  a {
    font-weight: bold;
    letter-spacing: .20rem;
    color: var(--white);
    font-size: 35px;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  border: solid 2px var(--medGrey);
  padding: 40px;
  border-radius: 20px;
  background-color: var(--lightGrey);
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
  color: #b40c0c;
  font-size: 50px;
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: var(--medGrey);
  padding: 10px 60px;
  box-shadow: 5px 5px 0px red;
`;

export { Container, Wrapper, Span, Title, Button };