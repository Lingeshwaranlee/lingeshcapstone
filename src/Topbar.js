import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MdOutlineAccountCircle} from 'react-icons/md';
function Topbar() {
 
  return (
    
      
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background:  "#4e73df",color:"white",marginTop:'1rem'}}>
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         ZEN CLASS <MdOutlineAccountCircle />
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
      

      
   
  );
}

export default Topbar;