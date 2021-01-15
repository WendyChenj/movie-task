import * as types from '../models/types';

// check if the movie is in nominate list
export const nominatedCheck = (nominateList: types.Movie[], movieId: string): boolean => {
  for (let i = 0; i < nominateList.length; i++) {
    if (nominateList[i].id === movieId) {
      return true;
    }
  }
  return false;
};
