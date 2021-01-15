import React, { useState, useEffect } from 'react';
import SearchBar from '../../common/components/SearchBar/SearchBar';
import MovieListContainer from '../../common/components/MovieListContainer/MovieListContainer';
// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../common/store/store';
import { thunkSearchMovieList, initMovieList } from '../../common/store/movie/movieActionCreator';

const Homepage = (): JSX.Element => {
  // set initial search term
  const [searchTerm, setSearchTerm] = useState('');
  const nominateList = useSelector((state: RootState) => state.movieList.nominateList);

  const dispatch = useDispatch();

  // Updates to the search terms will update the result list
  useEffect(() => {
    if (searchTerm !== '') {
      dispatch(thunkSearchMovieList(searchTerm, nominateList));
    } else {
      dispatch(initMovieList());
    }
  }, [searchTerm]);

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
