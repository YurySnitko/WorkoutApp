import { Box } from "@mui/system"
import { Timer } from "controls/Timer/Timer"
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import useStyles from "style"

export const GetReady = () => {
    const navigate = useNavigate()
    const classes = useStyles()

    return <Box className={classes.flexContainer}>
        <Typography variant="h5">Get Ready</Typography>
        <Timer time={5} onTimerFinished={() => navigate('/training')} color="#13f5bd" />
    </Box>
}