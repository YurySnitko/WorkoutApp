import { Check } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router"
import { useStore } from "../.."
import useStyles from "../../style"

export const TrainingCompleted = () => {
    const navigate = useNavigate()
    const { trainingStore } = useStore()
    const classes = useStyles()

    const finishActivity = () => {
        trainingStore.finishActivity()
        navigate('/')
    }

    return <Box className={classes.flexContainer} sx={{ paddingTop: "50px" }}>
        <Check sx={{ color: "#13f5bd", fontSize: "60px" }} />
        <Typography variant="h4">Workout Completed!</Typography>
        <Typography variant="body1">Nice job. You're done. Here's the workout summary.</Typography>
        <Typography variant="body1">Burned calories: 100</Typography>
        <Typography variant="body1">Minutes: 25</Typography>
        <Button className={classes.continueBtn} onClick={finishActivity} variant="contained">Continue</Button>
    </Box>
}