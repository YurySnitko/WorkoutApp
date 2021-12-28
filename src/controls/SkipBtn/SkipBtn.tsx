import { SkipNext, SkipPrevious } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { SkipBtnProps } from './SkipBtn.interfaces';
import { SkipBtnBox } from './SkipBtn.styles';

export const SkipButton: React.FC<SkipBtnProps> = ({
  direction,
  changeExercise,
}) => {
  return (
    <SkipBtnBox direction={direction}>
      <Button
        onClick={() => changeExercise()}
        variant="outlined"
        color="inherit"
      >
        {direction === 'next' && <SkipNext color="inherit" />}
        {direction === 'previous' && <SkipPrevious color="inherit" />}
      </Button>
    </SkipBtnBox>
  );
};
