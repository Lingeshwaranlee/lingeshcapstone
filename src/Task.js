import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MdDashboardCustomize} from 'react-icons/md';
import { useHistory } from 'react-router-dom';

export function Task() {
  const ken=[
    {
    task:"Javascript-Day-01: Introduction to Browser, Web",
    date:"21-08-2021",
    mark:"8"
  },
  {
    task:"Javascript-Day-02: arrays & objects & functions",
    date:"24-08-2021",
    mark:"8.5"
  },
  {
    task:"Javascript-Day-04: what is XMLHTTP request ?",
    date:"26-08-2021",
    mark:"9"
  },
  {
    task:"React -Day-09: React hooks ,states, components",
    date:"30-08-2021",
    mark:"8"
  },
  {
    task:"Mongodb-Day-11: Database,MongoDB,postman",
    date:"02-09-2021",
    mark:"7"
  },
  {
    task:"Boostrap -Day-21: Boostrap Design and navbar",
    date:"7-09-2021",
    mark:"9"
  },
  {
    task:"Javascript-Day-15: Introduction to Browser,Web",
    date:"11-09-2021",
    mark:"8"
  }]
  return(
    <div>
       <h2 style={{justifyContent: "center",textAlign: "center", color: " #4e73df",padding:"1%"}}>TASK SUBMISSION <MdDashboardCustomize style={{color:"black"}}/></h2>
       <Box
      sx={{
        width: "75%",
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
   
  <div></div>
  {ken.map((user)=><Zen task={user.task} date={user.date} mark={user.mark}  />)}
  </Box>
      </div>
  ) ;
}

function Zen({task,date,mark}){
  const history =useHistory();
  return(
    
    <div className='zoom'>
 <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        marginTop:'3%',
        marginLeft:"5%",
        borderRadius:"12px",
        overflow: "hidden",
        boxShadow: "rgb(0 0 0 / 24%) 1px 2px 13px",
        position:"static",
        padding:"2%"
      }}
    >   
   
    <div style={{color:'black',display:"flex", flexWrap: "wrap"}}>
      <div>
<h4 >LINGESHWARAN</h4>
<p >(B30WD TAMIL Hackathon Project)<br></br>{task}</p>
</div>
<div style={{paddingLeft:"12%",marginTop:"2%"}}>
  <h6 style={{textAlign:"center"}}>Submitted on<br></br> {date}</h6>
</div>
<div style={{marginLeft:"10%",display:"flex"}}>

<Button variant="contained" style={{margin:"10%",height:"45px",marginTop:"15%"}} onClick={() => history.push("/class")}>Task</Button><br></br><Button variant="outlined" style={{marginLeft:"5%",height:"45px",marginTop:"15%"}}>{mark}</Button>

</div>
    </div>
    </Box>
    </div>
  )
}