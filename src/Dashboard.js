import Box from '@mui/material/Box';
import { RiDashboardFill } from 'react-icons/ri';
export function Dashboard() {
  return (
  <div >
    <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",padding:"1%" }}>DASHBOARD <RiDashboardFill style={{color:"black"}}/></h2>
    <div  style={{}}>
    <div>
      <h4 style={{marginTop:'1%', marginLeft:"2%",}}>OVERVIEW</h4>
    <Box
      sx={{
        width: "60%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'1%',
        marginLeft:"2%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        padding:"2%"
      }}
    >
      <p>completion<span style={{paddingLeft:"70%"}}>85%/100%</span></p>
     <div className='progress'>
       <div className='progress-bar' role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuenmax="75" style={{backgroundColor:" #4e73df",color:"blue",width:"85%"}}></div>
       </div>
       </Box>
    </div>
    <div>
    <h4 style={{marginTop:'1%', marginLeft:"2%",}}>ATTENDANCE</h4>
    <Box
      sx={{
        width: "25%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'1%',
        marginLeft:"2%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        padding:"2%"
      }}
    >
   <h1 style={{textAlign:"center",color:"green"}}>80%</h1>
   <h5 style={{textAlign:"center"}}>Go To Classes</h5>
       </Box>
    </div>
    </div>
    </div>
  );
}
