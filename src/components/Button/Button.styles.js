import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all ease .3s;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  :hover {
    opacity: 0.8;
  }
`;

export default Wrapper;