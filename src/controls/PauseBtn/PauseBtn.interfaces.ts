import { ActivityStatusType } from 'store/TrainingStore/TrainingStore.interfaces';

export interface PauseBtnProps {
  setActivityStatus: (status: ActivityStatusType) => void;
  activityStatus: ActivityStatusType;
}
