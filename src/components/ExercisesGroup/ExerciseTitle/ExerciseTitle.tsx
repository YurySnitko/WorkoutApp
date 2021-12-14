import { Check } from "@mui/icons-material"
import { ExerciseTitleProps } from "./ExerciseTitle.interfaces"

export const ExerciseTitleWithStatus: React.FC<ExerciseTitleProps> = ({ title, isDone }) => {
    return <>
        {title}
        {isDone && <Check sx={{ verticalAlign: "sub", ml: "15px", color: "#13f5bd" }} />}
    </>
}
