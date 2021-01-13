import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkSearchMovieList } from '../../store/movie/movieActionCreator';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.css';

interface Props {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchTerm, handleSearch }: Props): JSX.Element => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar-container">
          <Typography variant="h6">The Shoppies</Typography>
          <div className="search-field">
            <div className="search-icon">
              <SearchIcon color="primary" />
            </div>
            <InputBase
              placeholder="Search by movie title... "
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchBar;
