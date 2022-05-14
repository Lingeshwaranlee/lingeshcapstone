import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Hackathon() {
  const history =useHistory(); 
  return (
  <div>
     <h1 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",}}>HACKATHON</h1>
     <Box
      sx={{
        width: "55%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'3%',
        marginLeft:"27%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        padding:"2%"
      }}
    >   
   
    <div style={{color:'black',display:"flex"}}>
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
    </Box>
    </div>
    )
}