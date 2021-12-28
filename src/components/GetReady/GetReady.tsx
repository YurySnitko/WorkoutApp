import React from 'react';
import { Timer } from 'controls/Timer/Timer';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';
import { GetReadyBox } from './GetReady.styles';

export const GetReady: React.FC = () => {
  const navigate = useNavigate();

  return (
    <GetReadyBox>
      <Typography variant="h5">Get Ready</Typography>
      <Timer
        time={5}
        onTimerFinished={() => navigate('/training')}
        type="ready"
      />
    </GetReadyBox>
  );
};
