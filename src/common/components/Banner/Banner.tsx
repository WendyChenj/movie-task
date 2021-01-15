import React from 'react';
import { Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <CheckCircleIcon color="secondary" className="check-circle-icon" />
      <Typography color="secondary">You&#39;ve got 5 nominations!</Typography>
    </div>
  );
};

export default Banner;
