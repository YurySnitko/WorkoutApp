import { AppBar, Typography } from "@mui/material"
import useStyles from "style"

export const Header = () => {
    const classes = useStyles()

    return <AppBar position="fixed" className={classes.header}>
        <Typography align="center">
            Workout App
        </Typography>
    </AppBar>
}