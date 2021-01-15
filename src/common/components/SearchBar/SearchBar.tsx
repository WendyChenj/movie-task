import React from 'react';
import './searchBar.css';
// Material UI Imports
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchTerm, handleSearch }: Props): JSX.Element => {
  const matches = useMediaQuery('(min-width:600px)');
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
              placeholder={matches ? 'Search by movie title... ' : 'Search...'}
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
