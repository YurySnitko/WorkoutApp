import { ActivityStatusType } from "store/TrainingStore";

export type PauseBtnPropsType = {
    setActivityStatus: (status: ActivityStatusType) => void
    activityStatus: ActivityStatusType
}

export type SkipBtnPropsType = {
    direction: "next" | "previous"
    changeExercise: () => void
}

export type TimerPropsType = {
    time: number
    color: string
    currentExercise?: number
    activityStatus?: ActivityStatusType
    onTimerFinished: () => void
}

export type CirclularPropsType = {
    time: number
    value: number
    timerColor: string
}