import React from 'react';
import * as types from '../../models/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeNominatedMovie } from '../../store/movie/movieActionCreator';
import MovieItem from '../MovieItem/MovieItem';
import Banner from '../Banner/Banner';
import { Typography, List, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import './nominationResults.css';

const NominationResults = (): JSX.Element => {
  const nominateResults = useSelector((state: RootState) => state.movieList.nominateList);
  const dispatch = useDispatch();

  const handleRemoveNominate = (e: React.MouseEvent, movie: types.Movie): void => {
    e.preventDefault();
    dispatch(removeNominatedMovie(movie));
  };

  let twitterText = 'My nominated movies: \n';
  let resultsList: JSX.Element[] | null = null;
  let resultsText: JSX.Element | null = null;

  if (nominateResults) {
    for (let i = 0; i < nominateResults.length; i++) {
      twitterText += '<' + nominateResults[i].title + ' (' + nominateResults[i].year + ')' + '> ';
    }
    resultsList = nominateResults.map((movie: types.Movie) => (
      <MovieItem key={movie.id} movie={movie} buttonTitle="Remove" buttonClick={handleRemoveNominate} />
    ));
  }

  if (!resultsList) {
    resultsText = <Typography>Choose the best movie for nomination!</Typography>;
  }

  const twitterHref = `https://twitter.com/intent/tweet?hashtags=quotes&text= ${encodeURIComponent(twitterText)}`;

  return (
    <div className="nomination-results-container">
      {nominateResults && nominateResults.length >= 5 ? <Banner /> : null}
      <Typography variant="h6" className="nomination-results-text">
        Nominations:
        <IconButton color="primary" disabled={!nominateResults} href={twitterHref} target="_blanket">
          <TwitterIcon />
        </IconButton>
      </Typography>
      {resultsText}
      <List>{resultsList}</List>
    </div>
  );
};

export default NominationResults;
