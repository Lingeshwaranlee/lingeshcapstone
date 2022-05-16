import {useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { MdOutlineTask} from 'react-icons/md';
export function Leave() {
  const [leave,setleave]=useState([]);
  useEffect(()=>{
    fetch("https://620c529fb5736325938b91f9.mockapi.io/hack")
    .then((data)=>data.json())
    .then((mvs)=>setleave(mvs));
  },[])
  const history =useHistory();
  return(
    <div>
      <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",padding:"20px"}}>Leave-Appplication <MdOutlineTask style={{color:"black"}}/></h2>
      <table  className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0",textAlign:'center' }}>
  <thead class="thead-dark">
    <tr>
      <th scope="col" >#</th>
      <th scope="col" style={{width:'10%'}}>FROM</th>
      <th scope="col">TO</th>
      <th scope="col" style={{width:'50%'}}>REASON</th>
      <th scope="col">APPROVED</th>
    </tr>
  </thead>
  </table>
  <div>
      {leave.map((user)=><Approved roll={user.roll} from={user.from} to={user.to} approval={user.approval} reasons={ user.reasons}  />)}
      </div>
      <Button variant="contained" style={{marginLeft:"45%"}} onClick={() => history.push("/apply")}>Apply Leave</Button>
      </div>
  );
}

function Approved({roll,from,to,approval,reasons}){
  return(
    <div>
<table  className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0",textAlign:'center' }}>
  
  <tbody>
    <tr>
      <th scope="row" style={{width:'6%'}} >{roll}</th>
      <td >{from}</td>
      <td>{to}</td>
      
      <td style={{width:'49%'}}>{reasons}</td>
      <td style={{width:'25%'}}>{approval}</td>
    </tr>
    
    
    
    
  </tbody>
</table>
<div>


</div>
    </div>
  )
}