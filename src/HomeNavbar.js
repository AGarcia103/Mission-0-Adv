import * as React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function Navbar () {
  return (
    <Box>
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          display: "flex",
          color: "#4a0a0a",
          justifyContent: "space-between",
         
        
        }}
      >
        <img
          width="190px"
          height="70px"
          className="logo"
          src="/images/NewLogo.jpg"
          alt="Next Level Homes Logo"
        />
        <div
          className="nav" id="nav-bar"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "right",
            alignItems: "right",
            width: "40%",
            marginTop: "20px",
            color: "#4a0a0a",
          }}
        >
          <Typography  component="div">
            DESIGNS
          </Typography>

          <Typography component="div">
            LOCATIONS
          </Typography>

          <Typography component="div">
              ABOUT US
          </Typography>

          <Typography component="div">
              LOGIN
          </Typography>
        </div>
      </div>
    </Box>
  );
}