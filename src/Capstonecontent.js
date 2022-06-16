import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';

//capstonecontent  page component
export function Capstonecontent() {
  const history =useHistory();
  return( 
  <div >
    
    <div style={{paddingLeft:"18%",width:"100%"}}>
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
        padding:"2%"
      }}
    >   
    <div style={{color:'black',display:"flex", flexWrap: "wrap"}}>
      <div>
<h3>LINGESHWARAN</h3>
<p >(B30WD TAMIL Capstone Project)<br></br>Zen class student dashboard</p>
</div>
<div style={{paddingLeft:"12%",marginTop:"5%"}}>
  <h6 style={{textAlign:"center"}}>Yet to be graded</h6>
</div>
<div>
<Button variant="contained"style={{margin:"24%"}}onClick={() => history.push("/cap")}>Capstone</Button>
</div>
    </div>
    <hr></hr>
    <p>Description :<span>To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.</span></p>
    <h4 style={{color:"black"}}>Task Title: Zen class student dashboard</h4>
    <h4 style={{color:"black"}}>Any specifications on the design?</h4>
    <ul>
      <li>Front-end: Reactjs</li>
      <li>Back-end: Nodejs</li>
      <li>Database: MongoDB</li>
     </ul>
     <p style={{color:"black"}}>Requirements:</p>
     <ul>
      <li>The project should achieve the CODE QUALITY</li>
      <li>Use fonts/icons if it’s required in the design.</li>
      <li>The use of various charts is required in the design.</li>
      <li>The use of bootstrap/ material CSS is required in the design</li>
     </ul>
     <p style={{color:"black"}}>How do I submit my work?</p>
     <ul>
      <li>Push all your work files to GitHub in two different repositories as given below</li>
      <li>Front-end repo name project-name-frontend.</li>
      <li>Back-end repo name project-name-backend.</li>
      <li>Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Heroku(https://www.heroku.com/).</li>
     </ul>
     <p style={{color:"black"}}>Any basic hints/links/reference sites to solve?</p>
     <p>https://getbootstrap.com/docs/4.4/getting-started/introduction/</p>
     <p>https://www.chartjs.org/</p>
     <p>https://react-bootstrap.github.io/</p>
     <p>https://materializecss.com/</p>
     <p>https://expressjs.com/</p>
     <hr></hr>
     <h4 style={{color:"black"}}>Code</h4>
     <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Front-end Source code</h6>
     <TextField id="outlined-basic"  variant="outlined" style={{paddingLeft:"42%"}} />
     </div>
      <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Back-end Source code</h6>
     <TextField id="outlined-basic"  variant="outlined" style={{paddingLeft:"43%"}} />
     </div>
      <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Front-end Deployed URL</h6>
     <TextField id="outlined-basic"  variant="outlined" style={{paddingLeft:"41%"}} />
     </div>
      <hr></hr>
     <div style={{display:"flex"}}>
     <h6 style={{color:"black"}}>Back-end Deployed URL</h6>
     <TextField id="outlined-basic"  variant="outlined" style={{paddingLeft:"42%"}} />
     </div>
     <Button variant="contained" style={{marginLeft:"70%"}} onClick={() => history.push("/response")}>Submit</Button>
    </Box>
    </div>
    </div>
    );
}
