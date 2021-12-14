import stores from "./stores";

export interface Workouts {
    exercises: Exercise[]
    muscle_group: MuscleGroup
    title: string
}

export interface Exercise {
    id: number
    title: string
    description: string
    duration: number
    photo: string
    video: string
    isDone?: boolean
}

export interface MuscleGroup {
    name: string
    photo: string
}

export type ActivityStatusType = "notStarted" | "started" | "completed" | "paused"

export type StoreType = typeof stores