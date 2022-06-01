import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Register() {
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
<Typography variant="h5">Create new account</Typography>

</Box>




<Paper elevation={3}
sx= {{ 
    padding: "24px",
    display: "flex",
    flexDirection: "column", 
    marginTop:"12px" }}>



<TextField 
label ="Email Address" 
type="email"/>

<TextField 
label ="Password" 
name="password" 
type="password" 
sx={{ marginTop: "12px"}}   />


<TextField
 label ="Confirm password" 
 name="Confirm password" 
 type="password"
 sx={{ marginTop: "12px"}}   />

<Button variant="contained"sx={{ marginTop: "12px"}}> 
Register</Button>


{/* additional option */}

<Box>
    <Typography>Do you have an account? Please <Link href="/SignIn">Sign in</Link></Typography>



</Box>

    


</Paper>
</Box>
);
}