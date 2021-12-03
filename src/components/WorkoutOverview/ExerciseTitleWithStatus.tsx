import { Check } from "@mui/icons-material"

export const ExerciseTitleWithStatus: React.FC<PropsType> = ({ title, isDone }) => {
    return <>
        {title}
        {isDone && <Check sx={{ verticalAlign: "sub", ml: "15px", color: "#13f5bd" }} />}
    </>
}

type PropsType = {
    title: string
    isDone: boolean
}