import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { WorkoutsType } from "store/OverviewStore"
import { ExerciseTitleWithStatus } from "./ExerciseTitleWithStatus"

export const ExercisesGroup: React.FC<WorkoutsType> = ({ exercises, title }) => {
    return <div>
        <Divider variant="fullWidth" />
        <h5>{title}</h5>
        <List>
            {exercises.map((e) => {
                return <ListItem key={e.id}>
                    <ListItemAvatar>
                        <Avatar variant="square" src={e.photo} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<ExerciseTitleWithStatus title={e.title} isDone={e.isDone ? true : false} />}
                        secondary={`${e.duration} sec`}
                    />
                </ListItem>
            })}
        </List>
    </div>
}