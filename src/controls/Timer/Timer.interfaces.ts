import { ActivityStatusType } from 'store/TrainingStore/TrainingStore.interfaces';

export interface TimerProps {
  time: number;
  type: TimerType;
  currentExercise?: number;
  activityStatus?: ActivityStatusType;
  onTimerFinished: () => void;
}

export interface TimerBoxProps {
  type: TimerType;
}

export interface CirclularProps {
  time: number;
  value: number;
  type: TimerType;
}

export type TimerType = 'ready' | 'main';
