import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { LeaveWorkoutBtnProps } from './LeaveWorkoutBtn.interfaces';
import React from 'react';

export const LeaveWorkoutBtn: React.FC<LeaveWorkoutBtnProps> = ({
  finishActivity,
}) => {
  const navigate = useNavigate();

  const leaveWorkout = () => {
    finishActivity();
    navigate('/');
  };

  return (
    <Button onClick={leaveWorkout} variant="outlined" color="inherit">
      Leave workout
    </Button>
  );
};
