import { makeAutoObservable } from "mobx"
import stores from "./stores"

export default class TrainingStore {
    currentExercise = 0
    activityStatus = "notStarted" as ActivityStatusType

    constructor() {
        makeAutoObservable(this)
    }

    setActivityStatus = (status: ActivityStatusType) => {
        this.activityStatus = status
    }

    onExerciseFinished = () => {
        stores.overViewStore.setExerciseStatusIsDone(stores.overViewStore.workoutExercises[this.currentExercise].id)
        this.currentExercise === stores.overViewStore.workoutExercises.length - 1 
            && this.setActivityStatus("completed") 
        this.activityStatus !== "completed" && this.goToNextExercise()
    }

    goToNextExercise = () => {
        this.currentExercise = this.currentExercise + 1
    }

    goToPreviousExercise = () => {
        this.currentExercise = this.currentExercise - 1
    }

    finishActivity = () => {
        stores.overViewStore.resetWorkoutStatuses()
        this.setActivityStatus("notStarted")
        this.currentExercise = 0
    }
}

export type ActivityStatusType = "notStarted" | "started" | "completed" | "paused"