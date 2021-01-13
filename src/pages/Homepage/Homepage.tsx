import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkSearchMovieList, initMovieList } from '../../common/store/movie/movieActionCreator';
import SearchBar from '../../common/components/SearchBar/SearchBar';
import MovieListContainer from '../../common/components/MovieListContainer/MovieListContainer';

const Homepage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm !== '') {
      console.log('dispatch');
      dispatch(thunkSearchMovieList(searchTerm));
    } else {
      dispatch(initMovieList());
    }
  }, [searchTerm]);

  console.log(searchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearchChange} />
      <MovieListContainer searchTerm={searchTerm} />
    </div>
  );
};

export default Homepage;
