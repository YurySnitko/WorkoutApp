import { Pause, PlayArrow } from '@mui/icons-material';
import React from 'react';
import { PauseBtnProps } from './PauseBtn.interfaces';
import { PauseBtnStld } from './PauseBtn.styles';

export const PauseBtn: React.FC<PauseBtnProps> = ({
  setActivityStatus,
  activityStatus,
}) => {
  const onclick = () => {
    activityStatus === 'paused'
      ? setActivityStatus('started')
      : setActivityStatus('paused');
  };

  return (
    <PauseBtnStld onClick={onclick} variant="contained">
      {activityStatus === 'paused' ? <PlayArrow /> : <Pause />}
    </PauseBtnStld>
  );
};
