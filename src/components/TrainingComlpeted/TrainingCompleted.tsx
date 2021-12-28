import { Typography } from '@mui/material';
import { FinishBtn } from 'controls/FinishBtn/FinishBtn';
import React from 'react';
import {
  CheckStld,
  CompletedBox,
  ResultsBox,
} from './TrainingCompleted.styles';

export const TrainingCompleted: React.FC = () => {
  return (
    <CompletedBox>
      <CheckStld />
      <Typography variant="h4">Workout Completed!</Typography>
      <ResultsBox>
        <Typography variant="body1">
          Nice job. You&#39;re done. Here&#39;s the workout summary.
        </Typography>
        <Typography variant="body1">Burned calories: 100</Typography>
        <Typography variant="body1">Minutes: 25</Typography>
      </ResultsBox>
      <FinishBtn />
    </CompletedBox>
  );
};
