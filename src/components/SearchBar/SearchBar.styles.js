import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background:var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
`;

const Image = styled.img`
  position: absolute;
  left: 15px;
  top: 14px;
  width: 30px;
`;

const Input = styled.input`
  font-size: 28px;
  position: absolute;
  top: 2.5px;
  left: 50px;
  margin: 8px auto;
  padding: 0 0 0 60px;
  border: 0;
  outline: none;
  box-shadow: none;
  width: 95%;
  background: transparent;
  color: var(--white);
`;

export { Wrapper, Content, Image, Input };