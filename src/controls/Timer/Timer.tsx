import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { CirclularProps, TimerProps } from './Timer.interfaces';
import { TimerBox, TimerCountBox } from './Timer.styles';

export const Timer: React.FC<TimerProps> = ({
  activityStatus,
  time,
  type,
  currentExercise,
  onTimerFinished,
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setProgress(100);
  }, [currentExercise]);

  useEffect(() => {
    if (progress === 0) {
      onTimerFinished();
      setProgress(100);
    }
  }, [progress, onTimerFinished]);

  useEffect(() => {
    if (activityStatus !== 'paused') {
      const timer = setInterval(() => {
        setProgress((prevProgress) => prevProgress - 1);
      }, time * 10);

      return () => clearInterval(timer);
    }
  }, [time, activityStatus]);

  return <CircularProgressWithLabel value={progress} time={time} type={type} />;
};

const CircularProgressWithLabel: React.FC<
  CirclularProps & CircularProgressProps
> = ({ value, time, type, ...props }) => {
  return (
    <TimerBox type={type}>
      <CircularProgress
        size={100}
        variant="determinate"
        value={value}
        color="inherit"
        {...props}
      />
      <TimerCountBox>
        <Typography variant="h4" component="div" color="inherit">
          {Math.ceil((value * time) / 100)}
        </Typography>
      </TimerCountBox>
    </TimerBox>
  );
};
