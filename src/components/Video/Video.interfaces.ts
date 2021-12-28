import { ActivityStatusType } from 'store/TrainingStore/TrainingStore.interfaces';

export interface VideoProps {
  activityStatus: ActivityStatusType;
  videoSrc: string;
  finishActivity: () => void;
}
