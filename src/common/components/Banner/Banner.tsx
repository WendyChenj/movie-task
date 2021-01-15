import React from 'react';
import './banner.css';
// Material UI Imports
import { Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

type Props = {
  title: string;
};
// When there are 5 nominees, the banner will show
const Banner = ({ title }: Props): JSX.Element => {
  return (
    <div className="banner-container">
      <CheckCircleIcon color="secondary" className="check-circle-icon" />
      <Typography color="secondary">{title}</Typography>
    </div>
  );
};

export default Banner;
