import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {DiJavascript,DiNodejs,DiCss3} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {SiMongodb,SiNetlify,SiPostman,SiVisualstudiocode,SiHeroku,SiBootstrap,SiAmazonaws} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
export function Student() {
  return (
  <div>
    
    <h1 style={{justifyContent: "center",textAlign: "center",color: "black",padding:"2%",width:"100%"}}>MERN STACK DEVELOPER</h1>
    <h2 style={{justifyContent: "center",textAlign: "center",color:" #4e73df"}}>Professional Skillset</h2>
    <div style={{textAlign:"center",justifyContent:"center",color:'black',paddingTop:"2%",paddingBottom:"2%",width:"100%"}}>
 
 
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><DiJavascript /></IconButton>
   <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><FaReact /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><DiCss3 /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><DiNodejs /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><SiMongodb /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><BsGithub /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><SiBootstrap/></IconButton>
    
    </div>
    
  <img
    className="img0"
    src="https://miro.medium.com/max/1400/1*HdBFQ9EO_Vc4-lHKShFbAQ.png"
  ></img>
  
   <h2 style={{justifyContent: "center",textAlign: "center",color:" #4e73df"}}>Tools To Use</h2>
    <div style={{textAlign:"center",justifyContent:"center",color:'black',width:"100%"}}>
 
    <IconButton aria-label="delete" style={{fontSize:"40px",color:'black'}}><SiVisualstudiocode /></IconButton>
   <IconButton aria-label="delete" style={{fontSize:"40px",color:'black'}}><SiPostman /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"40px",color:'black'}}><SiHeroku /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"40px",color:'black'}}><SiNetlify /></IconButton>
    <IconButton aria-label="delete" style={{fontSize:"50px",color:'black'}}><SiAmazonaws /></IconButton>
   
    
    </div>
</div>
  )
}
