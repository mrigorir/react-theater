import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all ease-in-out .3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 1s;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @keyframes animateThumb {
    from {
      margin-left: -1000px;
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default Image;