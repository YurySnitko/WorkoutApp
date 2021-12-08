import { ActivityStatusType } from "store/TrainingStore";

export type VideoPropsType = {
    activityStatus: ActivityStatusType
    videoSrc: string
    finishActivity: () => void
}