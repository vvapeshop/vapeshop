import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

const style = {
    linkStyle: {
        cursor: "pointer",
        color: "#6134eb"
    },
};

export default function SignIn() {
    const router=useRouter();
    const gotoRegister = ()=>{
        router.push("/register")

    }
return (
<Box 
sx={{ 
width: "100vw",
height: "100vh",
display: "flex",
flexDirection: "column",
justifyContent:"center",
alignItems: "center",
}}>



<Box>
<Typography variant="h5">Please Sign In</Typography>

</Box>




<Paper elevation={3}
sx= {{ 
    padding: "24px",
    display: "flex",
    flexDirection: "column", 
    marginTop:"12px" }}>



<TextField label ="Email Address" type="email"/>
<TextField label ="Password" type="password" sx={{ marginTop: "12px"}}   />

<Button variant="contained"sx={{ marginTop: "12px"}}> 
Sign in</Button>


{/* additional option */}

<Box sx= {{display:"flex", justifyContent: "right", marginTop:"10px"}}>
<Typography onClick= {gotoRegister} sx={style.linkStyle}>
    Create new account
    </Typography>


</Box>

    


</Paper>
</Box>
);
}