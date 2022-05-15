import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { MdSwitchAccount} from 'react-icons/md';
export function Capstone() {
  const history =useHistory(); 
  return (
  <div>
     <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",}}>CAPSTONE <MdSwitchAccount style={{color:"black"}}/></h2>
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
    </Box>
    </div>
    )
}
