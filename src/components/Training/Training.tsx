import { SkipButton } from 'controls/SkipBtn/SkipBtn';
import { Timer } from 'controls/Timer/Timer';
import { useStore } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PauseBtn } from 'controls/PauseBtn/PauseBtn';
import { Video } from '../Video/Video';
import { Typography } from '@mui/material';
import { ControlsBox, TrainingBox } from './Training.styles';

export const Training: React.FC = observer(() => {
  const navigate = useNavigate();
  const { overViewStore, trainingStore } = useStore();
  const {
    activityStatus,
    currentExercise,
    goToNextExercise,
    goToPreviousExercise,
    onExerciseFinished,
    setActivityStatus,
    finishActivity,
  } = trainingStore;
  const { workoutExercises } = overViewStore;

  useEffect(() => {
    activityStatus === 'completed' && navigate('/completed');
  }, [activityStatus, navigate]);

  return currentExercise !== null && workoutExercises.length > 0 ? (
    <TrainingBox>
      <Typography variant="h5">
        {workoutExercises[currentExercise].title}
      </Typography>
      <ControlsBox>
        {currentExercise > 0 && (
          <SkipButton
            changeExercise={goToPreviousExercise}
            direction="previous"
          />
        )}
        <Timer
          onTimerFinished={onExerciseFinished}
          activityStatus={activityStatus}
          time={workoutExercises[currentExercise].duration}
          currentExercise={currentExercise}
          type="main"
        />
        {currentExercise !== workoutExercises.length - 1 && (
          <SkipButton changeExercise={goToNextExercise} direction="next" />
        )}
      </ControlsBox>
      <Video
        activityStatus={activityStatus}
        finishActivity={finishActivity}
        videoSrc={workoutExercises[currentExercise].video}
      />
      <PauseBtn
        setActivityStatus={setActivityStatus}
        activityStatus={activityStatus}
      />
    </TrainingBox>
  ) : (
    <div>Loading....</div>
  );
});
