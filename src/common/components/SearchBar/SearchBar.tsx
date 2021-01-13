import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkSearchMovieList } from '../../store/movie/movieActionCreator';
import { RootState } from '../../store/store';
import * as types from '../../models/types';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.css';

const SearchBar = (): JSX.Element => {
  const movieList = useSelector((state: RootState) => state.movieList.movieList);

  const dispatch = useDispatch();

  const handleFetch = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(thunkSearchMovieList());
  };

  let movieEle: JSX.Element[] | null = null;

  if (movieList !== null) {
    movieEle = movieList.map((movie: types.Movie) => <div key={movie.id}>{movie.title}</div>);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar-container">
          <Typography variant="h6">The Shoppies</Typography>
          <div className="search-field">
            <div className="search-icon">
              <SearchIcon color="primary" />
            </div>
            <InputBase placeholder="Search by movie title... " />
          </div>
        </Toolbar>
      </AppBar>
      <button onClick={(e: React.MouseEvent) => handleFetch(e)}>fetch</button>
      {movieEle}
    </div>
  );
};

export default SearchBar;
