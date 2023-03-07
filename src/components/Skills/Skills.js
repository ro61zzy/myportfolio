import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography} from "@mui/material";

export default function BoxSx() {
  return (
    <Container id="skills" maxWidth="xl" sx={{ p:{ xs: "11px", md: "20px" }, mt:"65px" }}>
      <Box
        sx={{
          borderRadius: "40px",
          p: "10px 30px",
          color: "#fff",
          // height: { xs: "px", md: "400px" },
          backgroundColor: "#000",
          "&:hover": {
          backgroundColor: "#121212",
          },
        }}
      >
        <Box sx={{display:"flex", justifyContent:"center", fontSize:{ xs: "23px", md: "48px" }, fontWeight:"600", lineHeight:{ xs: "30px", md: "60px" }, fontFamily:"Lexend", pt:{ xs: "20px", md: "35px" } }}>Skills</Box>
        <Box sx={{display:"flex", justifyContent:"space-around", mt: { xs: "21px", md: "25px" }}}>
          <Box>
            <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>JavaScript</Typography>
            <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>Reactjs</Typography>
            <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>CSS</Typography> 
            <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>HTML</Typography>           
          </Box>
          <Box>
          <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>Material-UI</Typography>
          <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>Bootstrap</Typography>
          <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>Nodejs</Typography>
          <Typography sx={{mb:"20px", fontSize:{ xs: "15px", md: "30px" }}}>Git</Typography>          
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
