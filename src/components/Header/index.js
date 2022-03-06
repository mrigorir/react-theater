import React from 'react';

import { Link } from 'react-router-dom';
import RMDBLogo from '../../assets/images/react-movie-logo.svg';
import TMDBLogo from '../../assets/images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;