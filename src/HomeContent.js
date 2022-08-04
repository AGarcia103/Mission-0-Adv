import React from 'react';
import { Box, Container, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Main1 from "./Main1.jpg";


function HomeContent () {

  return (

    <Box 
      sx={{
      boxSizing: "border-box",
      backgroundImage: `url(${Main1})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "600px",
      width: "100%"
      }}>
  
    <Typography gutterBottom variant="h4" component="div" 
      sx={{
      fontFamily: "Poppins", 
      color: "#FFFFFF",
      paddingTop: "235px",
      paddingLeft: "80px",
      }}>
     
        It's your dream  <span 
          style={{color: "#d89e1a"}}>
             HOME
          </span>
          <br/>
        Let's build it right
    </Typography>
  
    <Container disableGutters={true} maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "170px",
        }}>
    
    <TextField
      size="small"
      sx={{
        display: "flex",
        backgroundColor: "#FFFFFF", 
        border: "none",
        marginTop: "10px",
        width: "300px"
        }}
    />
      
    <Button 
      sx={{  
        display: "flex",
        backgroundColor: "#4a0a0a", 
        color: "#FFFFFF",
        padding: "1px 15px",
        width: "155px",
        height: "40px",
        marginTop: "10px"
      }}>
        SEARCH
    </Button>
    </Container> 

  {/* ------- FIRST CARD CONTAINER ------- */}

    <Container disableGutters={true} maxWidth={false}
        sx={{
          display: "flex",
          marginTop: "95px",
          textAlign: "center",
          justifyContent: "center"
          }}>
    
    <Card sx={{ maxWidth: 345, paddingRight: "20px" }}>
      <CardMedia
        component="img"
        src="/images/Card1.jpg" 
        alt="House/Project1" 
        height="325px" 
        width="370px"
        sx={{display: "flex", width: "100%"}}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"
          sx={{color: "#4a0a0a"}}>
          Quality
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, paddingRight: "20px" }}>
      <CardMedia
        component="img"
        src="/images/Card2.jpg" 
        alt="House/Project2" 
        height="325px" 
        width="370px"
        sx={{display: "flex", width: "100%"}}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"
          sx={{color: "#4a0a0a"}}>
          Safety
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        src="/images/Card3.jpg" 
        alt="House/Project3" 
        height="325px" 
        width="370px"
        sx={{display: "flex", width: "100%"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"
          sx={{color: "#4a0a0a"}}>
          Reliability
        </Typography>
      </CardContent>
    </Card>
    </Container>

  {/* ------- SECOND CARD CONTAINER ------- */}

    <Container disableGutters={true} maxWidth={false}
        sx={{
          display: "flex",
          marginTop: "50px",
          textAlign: "center",
          justifyContent: "center"
          }}>
    
    <Card sx={{ maxWidth: 345, paddingRight: "20px" }}>
      <CardMedia
        component="img"
        src="/images/Card4.jpg" 
        alt="House/Project4" 
        height="325px" 
        width="370px"
        sx={{display: "flex", width: "100%"}}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"
          sx={{color: "#4a0a0a"}}>
          Integrity
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, paddingRight: "20px" }}>
      <CardMedia
        component="img"
        src="/images/Card5.jpg" 
        alt="House/Project5" 
        height="325px" 
        width="370px"
        sx={{display: "flex", width: "100%"}}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"
          sx={{color: "#4a0a0a"}}>
          Transparency
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        src="/images/Card6.jpg" 
        alt="House/Project" 
        height="325px" 
        width="370px"
        sx={{display: "flex", width: "100%"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"
          sx={{color: "#4a0a0a"}}>
          Creativity
        </Typography>
      </CardContent>
    </Card>
    </Container>

  {/* ---------- FOOTER ---------- */}

    <Container disableGutters={true} maxWidth={false}
        sx={{ 
          height: "50px",
          marginTop: "50px",
          textAlign: "center",
          color: "#4a0a0a"}}>
      <Typography>
      Copyright 2022 &copy; Next Level Homes
      </Typography>
    </Container>  
  </Box>
    );
}
export default HomeContent;