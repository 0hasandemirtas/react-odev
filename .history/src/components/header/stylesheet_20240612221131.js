import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container:{
        display:"flex",
        width:"100%",
        backgroundColor:"black"
    },
    contentContainer:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%"        
    }
},
{
    name: "header-component"
});

export default useStyles;