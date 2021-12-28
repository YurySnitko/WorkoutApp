import { Typography } from '@mui/material';
import { LeaveWorkoutBtn } from 'controls/LeaveWorkoutBtn/LeaveWorkoutBtn';
import { OverviewBtn } from 'controls/OverviewBtn/OverviewBtn';
import React, { useEffect, useRef } from 'react';
import { VideoProps } from './Video.interfaces';
import { Filter, PauseBox, VideoBox } from './Video.styles';

export const Video: React.FC<VideoProps> = ({
  activityStatus,
  videoSrc,
  finishActivity,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      activityStatus === 'paused' && videoRef.current.pause();
      activityStatus === 'started' && videoRef.current.play();
    }
  }, [activityStatus, videoSrc]);

  return (
    <VideoBox>
      <video src={videoSrc} ref={videoRef} autoPlay loop muted />
      {activityStatus === 'paused' && (
        <>
          <Filter />
          <PauseBox>
            <Typography variant="h5" color="inherit">
              Workout paused
            </Typography>
            <Typography variant="body2" color="inherit">
              Press &#34;Play&#34; button to continue
            </Typography>
            <OverviewBtn />
            <LeaveWorkoutBtn finishActivity={finishActivity} />
          </PauseBox>
        </>
      )}
    </VideoBox>
  );
};
