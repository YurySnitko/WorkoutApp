import { Box } from "@mui/system"
import { observer } from "mobx-react-lite"
import { useStore } from "../.."
import { ExercisesGroup } from "./ExercisesGroup"
import { StartWorkoutBtn } from "./StartWorkoutBtn"

export const WorkoutOverview = observer(() => {
    const {overViewStore} = useStore()

    return <Box sx={{padding: "20px 0 60px"}}>
        <Box>
            <img width="100%" style={{borderRadius: "5px"}} src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="workout" />
        </Box>
        <h2>Morning Flexibility Routine</h2>
        {overViewStore.workouts.map((e, i) => 
            <ExercisesGroup key={i} 
                            exercises={e.exercises} 
                            muscle_group={e.muscle_group}
                            title={e.title} />)
        }
        <StartWorkoutBtn />
    </Box>
})