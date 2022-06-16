import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//Querycontent page component
export function Querycontent() {
  const history = useHistory();
  const[roll,setroll]=useState("");
  const[title,settitle]=useState("");
  const[category,setcategory]=useState("");
  const[description,setdescription]=useState("");
  const[language,setlanguage]=useState("");
  return(
    <div>
      
      <Box sx={{
        width: "80%",
        height: "100%",
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
     
     <TextField id="filled-basic" label="TITLE"  variant="filled" onChange={(event)=>settitle(event.target.value)} />
     
     <TextField id="filled-basic"  label="CATEGORY" variant="filled" onChange={(event)=>setcategory(event.target.value)} />
     <TextField id="filled-basic" label="DESCRIPTION" variant="filled" onChange={(event)=>setdescription(event.target.value)} />
     <TextField id="filled-basic" label="LANGUAGE" variant="filled" onChange={(event)=>setlanguage(event.target.value)} />
     <Button variant="contained" 
     onClick={()=>{const newrecipe={roll:roll,title:title,category:category,description:description,language:language};
       
       fetch("https://620c529fb5736325938b91f9.mockapi.io/query",{
         method:"POST",
         body:JSON.stringify(newrecipe),
         headers: {
          "Content-Type": "application/json",
        },
      }).then(() => history.push("/queries"));
       
       
       }}>SUBMIT</Button>    
    </div>

      </Box>
      </div>
  ) ;
}
