import { observer } from 'mobx-react-lite';
import { useStore } from 'index';
import { ExercisesGroup } from '../ExercisesGroup/ExercisesGroup';
import { StartWorkoutBtn } from 'controls/StartWorkoutBtn/StartWorkoutBtn';
import { Container, ExercisesBox, ImgBox } from './WorkoutOverview.styles';

export const WorkoutOverview = observer(() => {
  const { overViewStore } = useStore();

  return (
    <Container>
      <ImgBox>
        <img
          src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="workout"
        />
      </ImgBox>
      <h2>Morning Flexibility Routine</h2>
      <ExercisesBox>
        {overViewStore.workouts.map((e) => (
          <ExercisesGroup
            key={e.title}
            exercises={e.exercises}
            muscle_group={e.muscle_group}
            title={e.title}
          />
        ))}
      </ExercisesBox>
      <StartWorkoutBtn />
    </Container>
  );
});
