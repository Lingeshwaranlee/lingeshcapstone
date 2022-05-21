import IconButton from '@mui/material/IconButton';
import Carousel  from 'react-bootstrap/carousel'
import {DiJavascript,DiNodejs,DiCss3} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {SiMongodb,SiNetlify,SiPostman,SiVisualstudiocode,SiHeroku,SiBootstrap,SiAmazonaws} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import Box from '@mui/material/Box';
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
    
  <Caros/>
  
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

function Caros(){
  return(
    <div>
      <Box
      sx={{
        width: "80%",
        height: "65vh",
        backgroundColor: 'white',
        marginLeft:"10%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        
      }}
    > 
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://miro.medium.com/max/1400/1*HdBFQ9EO_Vc4-lHKShFbAQ.png"
      alt="First slide"
      style={{width:"60%",objectFit:'cover'}}
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://thecareertrends.com/wp-content/uploads/2020/10/untitlsssssed.png"
      alt="Second slide"
      style={{width:"60%",objectFit:'cover'}}
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://techspawn.com/wp-content/uploads/2014/12/techspawn-designer.jpg"
      alt="Third slide"
      style={{width:"60%",objectFit:'cover'}}
    />

   
  </Carousel.Item>
</Carousel>
  </Box>
    </div>
  )
}