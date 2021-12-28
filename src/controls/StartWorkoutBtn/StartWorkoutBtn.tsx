import { useNavigate } from 'react-router-dom';
import { useStore } from 'index';
import { observer } from 'mobx-react-lite';
import { StartBtnStld } from './StartWorkoutBtn.styles';

export const StartWorkoutBtn = observer(() => {
  const navigate = useNavigate();
  const { trainingStore } = useStore();

  const onWorkoutStart = () => {
    if (trainingStore.activityStatus === 'paused') {
      navigate('/training');
    } else {
      trainingStore.setActivityStatus('started');
      navigate('/ready');
    }
  };

  return (
    <StartBtnStld variant="contained" fullWidth={true} onClick={onWorkoutStart}>
      {trainingStore.activityStatus === 'paused'
        ? 'Continue Workout'
        : 'Start Workout'}
    </StartBtnStld>
  );
});
