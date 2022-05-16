import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import {SiJquery} from 'react-icons/si';
import { Description } from '@mui/icons-material';
import {useEffect, useState } from "react";
export function Query() {
  const [query,setquery]=useState([]);
  useEffect(()=>{
    fetch("https://620c529fb5736325938b91f9.mockapi.io/query")
    .then((data)=>data.json())
    .then((mvs)=>setquery(mvs));
  },[])
  const history =useHistory();
  return (
    <div>
    <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",}}>QUERIES <SiJquery style={{color:"black"}}/></h2>
    <table  className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0",textAlign:'center' }}>
  <thead class="thead-dark">
    <tr>
      <th scope="col" style={{width:"5%"}} >#</th>
      <th scope="col" style={{width:'8%'}}>TITLE</th>
      <th scope="col" style={{width:'20%'}}>CATEGORY</th>
      <th scope="col" style={{width:'50%'}}>DESCRIPTION</th>
      <th scope="col"> LANGUAGE</th>
    </tr>
  </thead>
  </table>
  <div>
      {query.map((user)=><Doubt roll={user.roll} title={user.title} category={user.category} description={user.description} language={ user.language}  />)}
      </div>
      <Button variant="contained" style={{marginLeft:"43%"}} onClick={() => history.push("/query")}>create QUERY +</Button>
    </div>
  );
}
function Doubt({roll,title,category,description,language}){
  return(
    <div>
<table  className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0",textAlign:'center' }}>
  
  <tbody>
    <tr>
      <th scope="row" style={{width:'5%'}} >{roll}</th>
      <td  style={{width:'8%'}}  >{title}</td>
      <td>{category}</td>
      
      <td style={{width:'49%'}}>{description}</td>
      <td style={{width:'18%'}}>{language}</td>
    </tr>
    
    
    
    
  </tbody>
</table>
<div>


</div>
    </div>
  )
}