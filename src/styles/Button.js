import styled from 'styled-components';

const Button = styled.button`
  backgroundColor: transparent;
  border: ${props => props.light ? 'solid' : 'dashed' } 2px black;
  border-radius: 20px;
  color: ${props => props.light ? 'black' : 'grey' };
  font-weight: ${props => props.light ? 'bold' : 'normal' };
  font-size: 20px;
  padding: 10px 40px;
  letter-spacing: ${props => props.light ? '0' : '.25rem' };
`;

export default Button;
