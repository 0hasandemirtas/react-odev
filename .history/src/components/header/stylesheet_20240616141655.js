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
        borderRadius:"6px"
    },
    titleContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    }
},
{
    name: "header-component"
});

export default useStyles;