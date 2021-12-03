import { makeAutoObservable, runInAction } from "mobx"

export default class OverviewStore {
    workouts = [] as WorkoutsType[]

    constructor() {
        makeAutoObservable(this)
    }

    setExerciseStatusIsDone = (exerciseId: number) => {
        this.workouts = this.workouts.map(e => {
            return {
                ...e,
                exercises: e.exercises.map(e => e.id === exerciseId ? { ...e, isDone: true } : e)
            }
        })
    }

    resetWorkoutStatuses = () => {
        this.workouts = this.workouts.map(e => {
            return {
                ...e,
                exercises: e.exercises.map(e => {
                    e.isDone && delete e.isDone
                    return e
                })
            }
        })
    }

    async getWorkoutsData() {
        const response = await fetch(`${process.env.REACT_APP_URL}`)
            .then(res => res.json())
        response && runInAction(() => {
            this.workouts = response.data.questions
        })
    }

    get workoutExercises() {
        const arr = [] as ExerciseType[]
        this.workouts.length > 0 && this.workouts.forEach(e => arr.push(...e.exercises))
        return arr
    }
}

export type WorkoutsType = {
    exercises: ExerciseType[]
    muscle_group: MuscleGroupType
    title: string
}

export type ExerciseType = {
    id: number
    title: string
    description: string
    duration: number
    photo: string
    video: string
    isDone?: boolean
}

export type MuscleGroupType = {
    name: string
    photo: string
}