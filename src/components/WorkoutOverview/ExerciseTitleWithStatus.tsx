import { Check } from "@mui/icons-material"
import { ExerciseStatusPropsType } from "./workout.types"

export const ExerciseTitleWithStatus: React.FC<ExerciseStatusPropsType> = ({ title, isDone }) => {
    return <>
        {title}
        {isDone && <Check sx={{ verticalAlign: "sub", ml: "15px", color: "#13f5bd" }} />}
    </>
}
