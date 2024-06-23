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
        justifyContent:"space-between"
    },
    contentContainer:{
        display:"flex",
        justifyContent:"space-around",
        width:"100%"        
    }
},
{
    name: "header-component"
});

export default useStyles;