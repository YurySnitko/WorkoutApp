import { makeAutoObservable, runInAction } from 'mobx';
import { Exercise, Workouts } from './OverviewStore.interfaces';

export default class OverviewStore {
  workouts = [] as Workouts[];

  constructor() {
    makeAutoObservable(this);
  }

  setExerciseStatusIsDone = (exerciseId: number) => {
    this.workouts = this.workouts.map((e) => {
      return {
        ...e,
        exercises: e.exercises.map((e) =>
          e.id === exerciseId ? { ...e, isDone: true } : e
        ),
      };
    });
  };

  resetWorkoutStatuses = () => {
    this.workouts = this.workouts.map((e) => {
      return {
        ...e,
        exercises: e.exercises.map((e) => {
          e.isDone && delete e.isDone;
          return e;
        }),
      };
    });
  };

  async getWorkoutsData(): Promise<void> {
    const response = await fetch(`${process.env.REACT_APP_URL}`).then((res) =>
      res.json()
    );
    response &&
      runInAction(() => {
        this.workouts = response.data.questions;
      });
  }

  get workoutExercises(): Exercise[] {
    const arr = [] as Exercise[];
    this.workouts.length > 0 &&
      this.workouts.forEach((e) => arr.push(...e.exercises));
    return arr;
  }
}
