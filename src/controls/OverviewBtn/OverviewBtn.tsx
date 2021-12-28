import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import React from 'react';

export const OverviewBtn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/')} variant="outlined" color="inherit">
      Workout overview
    </Button>
  );
};
