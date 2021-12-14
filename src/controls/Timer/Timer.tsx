import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { CirclularProps, TimerProps } from './Timer.interfaces';

export const Timer:
  React.FC<TimerProps> = ({ activityStatus, time, color, currentExercise, onTimerFinished }) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
      setProgress(100)
    }, [currentExercise])

    useEffect(() => {
      if (progress === 0) {
        onTimerFinished()
        setProgress(100)
      }
    }, [progress, onTimerFinished])

    useEffect(() => {
      if (activityStatus !== "paused") {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress - 1));
        }, time * 10);

        return () => clearInterval(timer);
      }
    }, [time, activityStatus]);

    return <CircularProgressWithLabel value={progress} time={time} timerColor={color} />;
  }

const CircularProgressWithLabel: React.FC<CirclularProps & CircularProgressProps> = (
  { value, time, timerColor, ...props }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', color: `${timerColor}` }}>
      <CircularProgress size={100} variant="determinate" value={value} color='inherit' {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          color={timerColor}
        >{Math.ceil(value * time / 100)}</Typography>
      </Box>
    </Box>
  );
}