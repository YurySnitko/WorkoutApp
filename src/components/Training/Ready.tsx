import { Box } from "@mui/system"
import { Timer } from "./Timer"
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import useStyles from "../../style"

export const Ready = () => {
    const navigate = useNavigate()
    const classes = useStyles()

    return <Box className={classes.flexContainer}>
        <Typography variant="h4">Get Ready</Typography>
        <Timer time={5} onTimerFinished={() => navigate('/training')} color="#13f5bd" />
    </Box>
}