import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../common/store/store';
import { thunkSearchMovieList, initMovieList } from '../../common/store/movie/movieActionCreator';
import SearchBar from '../../common/components/SearchBar/SearchBar';
import MovieListContainer from '../../common/components/MovieListContainer/MovieListContainer';

const Homepage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const nominateList = useSelector((state: RootState) => state.movieList.nominateList);

  const dispatch = useDispatch();

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
