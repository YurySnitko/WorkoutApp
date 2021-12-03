import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    startBtn: {
        position: "fixed",
        zIndex: 10,
        bottom: "20px",
        maxWidth: "600px",
        right: 0,
        left: 0,
        marginRight: "auto",
        marginLeft: "auto",
        boxShadow: "2px 5px 10px 2px #e9d0f5",
        backgroundColor: "#ad0cf8",
        "&:hover": {
            backgroundColor: "#7801af",
        }
    },
    continueBtn: {
        margin: "20px 0",
        backgroundColor: "#ad0cf8",
        "&:hover": {
            backgroundColor: "#7801af",
        }
    },
    pauseBtn: {
        borderRadius: "50%", 
        backgroundColor: '#ad0cf8', 
        minWidth: '40px', 
        padding: "10px",
        "&:hover": {
            backgroundColor: "#7801af",
        }
    },
    flexContainer: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        paddingTop: "30px"
    },
    videoFilter: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        backgroundColor: "black",
        opacity: "0.6",
        zIndex: "10"
    },
    pauseBox: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        color: '#eee',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        zIndex: "20"
    },
    timerBox: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        position: "relative", 
        alignSelf: "stretch" 
    }
})

export default useStyles