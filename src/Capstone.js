import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Capstone() {
  const history =useHistory(); 
  return (
  <div>
     <h1 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",}}>CAPSTONE</h1>
     <Box
      sx={{
        width: "50%",
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
<h2 style={{}}>LINGESHWARAN</h2>
<p style={{}}>(B30WD TAMIL Capstone Project)<br></br>Zen class student dashboard</p>
</div>
<div>
  <h3 style={{textAlign:"center",margin:"24%"}}>Yet to be graded</h3>
</div>
<div>
<Button variant="contained"style={{margin:"44%",color:"orangered",backgroundColor:"rgb(247, 194, 96)"}}onClick={() => history.push("/cap")}>Capstone</Button>
</div>
    </div>
    </Box>
    </div>
    )
}
