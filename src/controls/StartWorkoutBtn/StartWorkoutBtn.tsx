import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import { useStore } from "index"
import useStyles from "style"

export const StartWorkoutBtn = () => {
    const navigate = useNavigate()
    const {trainingStore} = useStore()
    const classes = useStyles()

    const onWorkoutStart = () => {
        if (trainingStore.activityStatus === "paused") {
            navigate("/training")
        } else {
            trainingStore.setActivityStatus("started")
            navigate("/ready")
        }
    }

    return <Button
        className={classes.startBtn}
        variant="contained"
        fullWidth={true}
        onClick={onWorkoutStart}
    >
        {trainingStore.activityStatus === "paused" ? "Continue Workout" : "Start Workout"}
    </Button>
}