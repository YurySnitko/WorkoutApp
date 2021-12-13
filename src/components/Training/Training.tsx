import { Box } from "@mui/system"
import { SkipButton } from "components/Controls/SkipBtn"
import { Timer } from "components/Controls/Timer"
import { useStore } from "index"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { PauseBtn } from "components/Controls/PauseBtn"
import { Video } from "./Video"
import { Typography } from "@mui/material"
import useStyles from "style"

export const Training = observer(() => {
    const navigate = useNavigate()
    const classes = useStyles()
    const { overViewStore, trainingStore } = useStore()
    const { activityStatus,
        currentExercise,
        goToNextExercise,
        goToPreviousExercise,
        onExerciseFinished,
        setActivityStatus,
        finishActivity } = trainingStore
    const { workoutExercises } = overViewStore

    useEffect(() => {
        activityStatus === "completed" && navigate("/completed")
    }, [activityStatus, navigate])

    return currentExercise !== null && workoutExercises.length > 0
        ? (<Box className={classes.flexContainer} sx={{ gap: "20px" }}>
            <Typography variant="h5">{workoutExercises[currentExercise].title}</Typography>
            <Box className={classes.timerBox}>
                {
                    currentExercise > 0
                    && <SkipButton changeExercise={goToPreviousExercise} direction="previous" />
                }
                <Timer onTimerFinished={onExerciseFinished}
                    activityStatus={activityStatus}
                    time={workoutExercises[currentExercise].duration}
                    currentExercise={currentExercise}
                    color="#f00372" />
                {
                    currentExercise !== workoutExercises.length - 1
                    && <SkipButton changeExercise={goToNextExercise} direction="next" />
                }
            </Box>
            <Video activityStatus={activityStatus}
                finishActivity={finishActivity}
                videoSrc={workoutExercises[currentExercise].video} />
            <PauseBtn setActivityStatus={setActivityStatus} activityStatus={activityStatus} />
        </Box>)
        : <div>Loading....</div>
})