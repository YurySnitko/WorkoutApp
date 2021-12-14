import { ActivityStatusType } from "store/stores.interfaces";

export interface PauseBtnProps {
    setActivityStatus: (status: ActivityStatusType) => void
    activityStatus: ActivityStatusType
}