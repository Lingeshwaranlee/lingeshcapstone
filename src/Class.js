import Box from '@mui/material/Box';
import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import Button from '@mui/material/Button';
import { RiAccountPinCircleFill} from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
export function Class() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  
  // Values should be only date
  const VALUES = ["2021-01-01", "2021-01-05", "2021-01-10","2021-01-15", "2021-01-20", "2021-01-25"];
  
  // Description array corresponding to values
  const description = [
    "Day -1 : Introduction to Browser & web",
    "Day -2 : JS array & objects",
    " Day -3 : What is XMLHTTP Request? & scope",
    "Day -4 : MRF - array method",
    " Day -5 : Request & Response cycle",
    "Day -6 : Functions",
    
  ];
  const content=[
    "Introduction to web Browser Wars ,DOM tree, CSSOM tree,Browser internals - HTML parser , CSS parser , JS engine",
    "HTTP Methods, How the Server looks at the URL, Request & Response cycle, HTML Browser view - Debugger, Inspect, Responsive View",
  " XMLHTTP Request ,Hoisting & scope ,Introduction to functions",
  "Map, Reduce,  Filter ,continuation of map, reduce,filter",
  "HTTP Methods,How the Server looks at the URL,Request & Response cycle,HTML Browser view - Debugger, Inspect, Responsive View,Browser js vs Node js,Data types",
  "Function & return keyword ,types of function",
]
  
const history =useHistory();
  return (
    <div className="App">
      <h2 style={{justifyContent: "center",textAlign: "center",color: " #4e73df",padding: "1%",}}>
       ZEN CLASS <RiAccountPinCircleFill style={{ color: "black" }} />
      </h2>
    <Box
    sx={{
      width: "60%",
      height: "100%",
      backgroundColor: '#4e73df',
      marginTop:'2%',
      marginLeft:"15%",
      borderRadius:"12px",
      overflow: "hidden",
      boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
      position:"static",
      padding:"2%"
    }}
  > 
  <h4 style={{color:"white"}}>SESSIN ROADMAP</h4>
   <div className="root-div">
    <div style={{ width: "80%",
                  height: "100px", 
                  margin: "0 auto",color:"white" }}>
      <HorizontalTimeline
        styles={{ outline: "#DFA867", foreground: "#19295C" }}
        index={value}
        indexClick={(index) => {
          setValue(index);
          setPrevious(value);
        }}
        values={VALUES}
      />
    </div>
    
  </div>
  </Box>
  
  <Box
    sx={{
      width: "60%",
      height: "100%",
      backgroundColor:"white",
      marginTop:'2%',
      marginLeft:"15%",
      borderRadius:"12px",
      overflow: "hidden",
      boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
      position:"static",
      padding:"2%"
    }}
  >
   <h5 style={{color:"black",paddingLeft:"5px",borderRadius:"7px"}}>Please Watch The Recording<span style={{paddingLeft:"20%"}}><Button variant="contained" onClick={() => history.push("/record")} style={{backgroundColor:"rgb(39, 214, 39)",borderRadius:"7px",marginLeft:"10%"}}>Play Recording</Button></span></h5>
  </Box>
  <Box
    sx={{
      width: "60%",
      height: "100%",
      backgroundColor: 'white',
      marginTop:'2%',
      marginLeft:"15%",
      borderRadius:"12px",
      overflow: "hidden",
      boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
      position:"static",
      padding:"2%"
    }}
  >
    <h4 style={{color:'black'}}>JAVASCRIPT:<span  className="text-center">{description[value]}</span></h4>
 <br></br>
  <div>DATE: {VALUES[value]}----- <span>TIMING: 10AM-1PM </span></div>
  <hr></hr>
  <h6 style={{color:'black'}}>CONTENT:</h6>
  {content[value]}
  <br></br>
  <br></br>
  <h6 style={{color:'black'}}>PRE-READ:</h6>
  <p>No preread available</p>
  </Box>
  
  <Box
    sx={{
      width: "60%",
      height: "100%",
      backgroundColor: 'white',
      marginTop:'2%',
      marginLeft:"15%",
      borderRadius:"12px",
      overflow: "hidden",
      boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
      position:"static",
      padding:"2%"
    }}
  >
<h5 style={{color:'black'}}>ACTIVITIES</h5>
<h6>https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/edit?usp=sharing</h6>
<span><Button variant="contained" onClick={() => history.push("/task")} style={{backgroundColor:"",borderRadius:"7px"}}>TASK</Button></span>

  </Box>
  </div>
);
}
