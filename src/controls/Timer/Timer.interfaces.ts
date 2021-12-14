import { ActivityStatusType } from "store/stores.interfaces"

export interface TimerProps {
    time: number
    color: string
    currentExercise?: number
    activityStatus?: ActivityStatusType
    onTimerFinished: () => void
}

export interface CirclularProps {
    time: number
    value: number
    timerColor: string
}