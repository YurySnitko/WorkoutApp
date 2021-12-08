import { Button } from "@mui/material"
import { Pause, PlayArrow } from "@mui/icons-material"
import useStyles from "style"
import { PauseBtnPropsType } from "./controls.types"

export const PauseBtn: React.FC<PauseBtnPropsType> = ({ setActivityStatus, activityStatus }) => {
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