import { 
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles({
    container:{
        display:"flex",
        width:"100%",
        height:"100px",
        backgroundColor:"blue",
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
        width:"50px",
        height:"50px",
        borderRadius:"3px"
    }
},
{
    name: "header-component"
});

export default useStyles;