import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

export function Hack() {
  const history =useHistory();
  return( 
  <div >
    
    <div style={{paddingLeft:"18%"}}>
   <Box
      sx={{
        width: "70%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'3%',
        marginLeft:"1%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        padding:"2%",
        className:"table"
      }}
    >   
   
  
    <div style={{color:'black',display:"flex",flexWrap:"nowrap"}}>
      <div>
<h3 >LINGESHWARAN</h3>
<p >(B30WD TAMIL Hackathon Project)<br></br>Zen class student dashboard</p>
</div>
<div style={{paddingLeft:"12%",marginTop:"2%"}}>
  <h6 style={{textAlign:"center"}}>Submitted on<br></br> 26th march<br></br><Button variant="outlined">3.5/10</Button></h6>
</div>
<div>

<Button variant="contained"style={{margin:"24%"}}onClick={() => history.push("/hack")}>HACKATHON</Button>

</div>
    </div>
    <hr></hr>
    <p style={{color:"black"}}>Description :<span>Task Document Link:</span></p>
    
    <h6>https://docs.google.com/document/d/1qmc61neCuTkp3UDRSR-HdNovphI3IULBUlGLrdKcUGg/preview </h6>
    <hr></hr>
    <h4 style={{color:"black"}}>Guidelines:</h4>
    <p>You have 24 hours to complete the project before the deadline.  </p>
    <p>Raise a query ticket only in the Zen portal and get your doubts resolved.  </p>
     <hr></hr>
     <h4 style={{color:"black"}}>Code</h4>
     <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Front-end Source code</h6>
    <p style={{paddingLeft:"23%"}} >https://cerulean-brioche-6b7076.netlify.app/</p>
     </div>
     <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Back-end Source code</h6>
     <p style={{paddingLeft:"23%"}} >https://github.com/Lingeshwaranlee/zenhackath</p>
     </div>
      <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Front-end Deployed URL</h6>
     <p style={{paddingLeft:"21%"}} >	https://github.com/Lingeshwaranlee/zenbacken</p>
     </div>
      <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Back-end Deployed URL</h6>
     <p style={{paddingLeft:"22%"}} >	https://cerulean-brioche-6b7076.netlify.app/</p>
     </div>
      <hr></hr>
     <Button variant="contained" style={{marginLeft:"70%"}} >Submitted</Button>
    </Box>
    </div>
    </div>
    );
}
