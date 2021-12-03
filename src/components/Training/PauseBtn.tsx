import { Button } from "@mui/material"
import { Pause, PlayArrow } from "@mui/icons-material"
import { ActivityStatusType } from "../../store/TrainingStore"
import useStyles from "../../style"

export const PauseBtn: React.FC<PropsType> = ({ setActivityStatus, activityStatus }) => {
    const classes = useStyles()
    
    const onclick = () => {
        activityStatus === "paused" 
        ? setActivityStatus("started")
        : setActivityStatus("paused")
    }

    return <Button onClick={onclick} variant='contained' className={classes.pauseBtn}>
        {activityStatus === "paused" ? <PlayArrow /> : <Pause />}
    </Button>
}

type PropsType = {
    setActivityStatus: (status: ActivityStatusType) => void
    activityStatus: ActivityStatusType
}