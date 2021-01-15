import React from 'react';
import './nominationResults.css';
import MovieItem from '../MovieItem/MovieItem';
import Banner from '../Banner/Banner';
import * as types from '../../models/types';
// Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeNominatedMovie } from '../../store/movie/movieActionCreator';
// Material UI Imports
import { Typography, List, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const NominationResults = (): JSX.Element => {
  // Get nomination list from store
  const nominateResults = useSelector((state: RootState) => state.movieList.nominateList);
  const dispatch = useDispatch();

  const handleRemoveNominate = (e: React.MouseEvent, movie: types.Movie): void => {
    e.preventDefault();
    dispatch(removeNominatedMovie(movie));
  };

  let twitterText = 'My nominated movies: \n';
  let resultsList: JSX.Element[] | null = null;
  let instructionText: JSX.Element | null = null;

  if (nominateResults) {
    for (let i = 0; i < nominateResults.length; i++) {
      twitterText += '<' + nominateResults[i].title + ' (' + nominateResults[i].year + ')' + '> ';
    }
    // Generate the nomination list
    resultsList = nominateResults.map((movie: types.Movie) => (
      <MovieItem key={movie.id} movie={movie} buttonTitle="Remove" buttonClick={handleRemoveNominate} />
    ));
  }

  if (!resultsList) {
    instructionText = <Typography>Choose the best movie for nomination!</Typography>;
  }

  // Share the nomination list on twitter
  const twitterHref = `https://twitter.com/intent/tweet?hashtags=quotes&text= ${encodeURIComponent(twitterText)}`;

  return (
    <div className="nomination-results-container">
      {/* Show banner under certain condition */}
      {nominateResults && nominateResults.length >= 5 ? <Banner /> : null}

      <Typography variant="h6" className="nomination-results-text">
        Nominations:
        <IconButton color="primary" disabled={!nominateResults} href={twitterHref} target="_blanket">
          <TwitterIcon />
        </IconButton>
      </Typography>

      {/* Show instruction at the beginning and hide it when there is at least one nomination */}
      {instructionText}

      <List>{resultsList}</List>
    </div>
  );
};

export default NominationResults;
