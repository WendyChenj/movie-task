import React from 'react';
import './banner.css';
// Material UI Imports
import { Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// When there are 5 nominees, the banner will show
const Banner = (): JSX.Element => {
  return (
    <div className="banner-container">
      <CheckCircleIcon color="secondary" className="check-circle-icon" />
      <Typography color="secondary">You&#39;ve got at least 5 nominations!</Typography>
    </div>
  );
};

export default Banner;
