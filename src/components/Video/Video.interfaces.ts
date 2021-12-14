import { ActivityStatusType } from "store/stores.interfaces";

export interface VideoProps {
    activityStatus: ActivityStatusType
    videoSrc: string
    finishActivity: () => void
}