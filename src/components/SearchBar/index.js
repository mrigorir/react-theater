import React from 'react';
import searchIcon from '../../assets/images/search-icon.svg';
import { Wrapper, Content, Image, Input } from './SearchBar.styles';

const SearchBar = ({ searchRef, handleSearchValue }) => {
  return (
    <Wrapper>
      <Content>
        <Image src={searchIcon} alt="search-icon" />
        <Input 
          type="text" 
          placeholder="Search Movie"
          ref={searchRef}
          onChange={(e) => handleSearchValue(searchRef, e)} />
      </Content>
    </Wrapper>
  )
};

export default SearchBar;