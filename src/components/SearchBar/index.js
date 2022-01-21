import React, { useState, useRef, useEffect } from 'react';
import searchIcon from '../../assets/images/search-icon.svg';
import { Wrapper, Content, Image } from './SearchBar.styles';

const SearchBar = ({ searchRef, handleSearchValue }) => {
  return (
    <Wrapper>
      <Content>
        <Image src={searchIcon} alt="search-icon" />
        <input 
          type="text" 
          placeholder="Search Movie"
          ref={searchRef}
          onChange={(e) => handleSearchValue(searchRef, e)} />
      </Content>
    </Wrapper>
  )
};

export default SearchBar;