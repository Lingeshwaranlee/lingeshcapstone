import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Leave() {
  const leo=[
    {
      roll:"1",
      from:"21-01-2022",
      to:"22-01-2022",
      reasons:"I have an appointment to meet my girl friend",
      approval:"Not Approved",
    },
    {
      roll:"2",
      from:"   21-12-2021",
      to:"28-12-2021",
      reasons:"I am going outstation with my family so kindly give me a leave",
      approval:" Approved",
    },
  
    {
      roll:"3",
      from:"12-02-2022",
      to:"28-02-2022",
      reasons:"I had corono positive so needed a break ",
      approval:" Approved",
    },
   
   
  ]
  const history =useHistory();
  return(
    <div>
      <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",padding:"20px"}}>Leave-Appplication</h2>
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
      {leo.map((user)=><Approved roll={user.roll} from={user.from} to={user.to} approval={user.approval} reasons={ user.reasons}  />)}
      </div>
      <Button variant="contained" style={{marginLeft:"40%"}} onClick={() => history.push("/apply")}>Apply Leave</Button>
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