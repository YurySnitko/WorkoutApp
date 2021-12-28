import React from 'react';
import { Typography } from '@mui/material';
import { HeaderBox } from './Header.styles';

export const Header: React.FC = () => {
  return (
    <HeaderBox>
      <Typography align="center">Workout App</Typography>
    </HeaderBox>
  );
};
