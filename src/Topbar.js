import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { RiAccountBoxFill } from 'react-icons/ri';

//common topbar component for all the page

function Topbar() {
  const history =useHistory();
  return (
    
      
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background:  "#4e73df",color:"white"}}>
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         ZEN CLASS <RiAccountBoxFill /> 
        </Typography>
        <div className="nav-item">
        <Button color="inherit" onClick={() => history.push("/login")}>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  </Box>
      

      
   
  );
}

export default Topbar;