import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { ActivityStatusType } from "../../store/TrainingStore"
import useStyles from "../../style"

export const Video: React.FC<PropsType> = ({ activityStatus, videoSrc, finishActivity }) => {
    const navigate = useNavigate()
    const videoRef = useRef<HTMLVideoElement>(null)
    const classes = useStyles()

    const leaveWorkout = () => {
        finishActivity()
        navigate("/")
    }

    useEffect(() => {
        if (videoRef.current) {
            activityStatus === "paused" && videoRef.current.pause()
            activityStatus === "started" && videoRef.current.play()
        } 
    }, [activityStatus, videoSrc])

    return <Box sx={{ position: "relative" }}>
        <video src={videoSrc} ref={videoRef} autoPlay loop muted width="100%" />
        {activityStatus === "paused" && <>
            <Box className={classes.videoFilter} />
            <Box className={classes.pauseBox}>
                <Typography variant="h5" color="inherit">Workout paused</Typography>
                <Typography variant="body2" color="inherit">Press "Play" button to continue</Typography>
                <Button onClick={() => navigate("/")} variant="outlined" color="inherit">Workout overview</Button>
                <Button onClick={leaveWorkout} variant="outlined" color="inherit">Leave workout</Button>
            </Box>
        </>}
    </Box>
}

type PropsType = {
    activityStatus: ActivityStatusType
    videoSrc: string
    finishActivity: () => void
}