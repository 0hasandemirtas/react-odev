import { 
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles({
    container:{
        display:"flex",
        width:"100%",
        height:"100px",
        backgroundColor:"#2A9D8F",
        color:"red",
        alignItems:"center",
        justifyContent:"space-around"
    },
    contentContainer:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%"        
    },
    logo:{
        width:"60px",
        height:"60px",
        borderRadius:"6px",
        marginRight:"20px"
    },
    titleContainer:{
        display:"flex",
        justifyContent:"space-evenly",
        width:"40%"
    },
    titleContentContainer:{
        padding:"15px",
        backgroundColor:"#2e2e2e",
        borderRadius:"15px",
        textDecoration:"none",
        fontSize:"15px",
        textColor:"3e3e3e"
    }
},
{
    name: "header-component"
});

export default useStyles;