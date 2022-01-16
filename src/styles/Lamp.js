import styled from 'styled-components';

const Lamp = styled.div`
  width: 100px;
  height: 100px;
  border: solid 3px black;
  border-radius: 100%;
  background-color: ${ props => props.light ? 'gold' : 'grey' }
`;

export default Lamp;
