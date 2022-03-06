import React from 'react';
import PropTypes from 'prop-types';
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

SearchBar.propTypes = {
  searchRef: PropTypes.string,
  handleSearchValue: PropTypes.string,
}

export default SearchBar; //lol