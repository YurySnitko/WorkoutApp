import { AppBar, Typography } from "@mui/material"

export const Header = () => {
    return <AppBar
        position="fixed"
        sx={{
            backgroundColor: "#ad0cf8",
            width: "762px",
            right: 0,
            left: 0,
            ml: "auto",
            mr: "auto"
        }}
    >
        <Typography align="center">
            Workout App
        </Typography>
    </AppBar>
}