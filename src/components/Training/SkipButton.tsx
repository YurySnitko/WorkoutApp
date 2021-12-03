import { SkipNext, SkipPrevious } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Box } from "@mui/system"

export const SkipButton: React.FC<PropsType> = ({ direction, changeExercise }) => {
    return <Box
        position="absolute"
        sx={
            direction === "next"
                ? { right: 0, color: '#ad0cf8' }
                : { left: 0, color: '#ad0cf8' }
        }>
        <Button
            onClick={() => changeExercise()}
            variant="outlined"
            color='inherit'
            sx={{ borderWidth: "2px", borderRadius: "6px" }}
        >
            {direction === "next" && <SkipNext color='inherit' />}
            {direction === "previous" && <SkipPrevious color='inherit' />}
        </Button>
    </Box>
}

type PropsType = {
    direction: "next" | "previous"
    changeExercise: () => void
}