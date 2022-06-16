import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import { MdOutlineTask} from 'react-icons/md';
import Box from '@mui/material/Box';

//Applyleave page component
export function ApplyLeave() {
  //Assigning inbuild functions to variables
  const history = useHistory();
  const[roll,setroll]=useState("");
  const[from,setfrom]=useState("");
  const[to,setto]=useState("");
  const[reasons,setreasons]=useState("");
  const[approval,setapproval]=useState("");
  return (
    <div>
    <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",padding:"20px"}}>Leave-Appplication <MdOutlineTask style={{color:"black"}}/></h2>
    <Box sx={{
      width: "80%",
      height: "80%",
      backgroundColor: 'white',
      marginTop:'3%',
      marginLeft:"10%",
      borderRadius:"12px",
      overflow: "hidden",
      boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
      position:"static",
      padding:"2%"
    }}
  >
    <div className="recipe-form">
     <TextField id="filled-basic" type="number" label="ROLL" variant="filled" onChange={(event)=>setroll(event.target.value)} />
     <h6>FROM</h6>
     <TextField id="filled-basic" type="date"  variant="filled" onChange={(event)=>setfrom(event.target.value)} />
     <h6>TO</h6>
     <TextField id="filled-basic" type="date"variant="filled" onChange={(event)=>setto(event.target.value)} />
     <TextField id="filled-basic" label="REASON" variant="filled" onChange={(event)=>setreasons(event.target.value)} />
     <TextField id="filled-basic" label="APPROVAL" variant="filled" onChange={(event)=>setapproval(event.target.value)} />
     <Button variant="contained" 
     onClick={()=>{const newrecipe={roll:roll,from:from,to:to,reasons:reasons,approval:approval};
       
       fetch("https://620c529fb5736325938b91f9.mockapi.io/hack",{
         method:"POST",
         body:JSON.stringify(newrecipe),
         headers: {
          "Content-Type": "application/json",
        },
      }).then(() => history.push("/Leave"));
       
       
       }}>SUBMIT</Button>    
    </div>
  </Box>
  </div>
  );
}
