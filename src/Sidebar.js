import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { RiAccountBoxFill,RiAccountPinCircleFill,RiDashboardFill ,RiNewspaperLine} from 'react-icons/ri';
import { MdDashboardCustomize,MdAccountBalanceWallet,MdSwitchAccount,MdOutlineTask} from 'react-icons/md';
import {SiJquery} from 'react-icons/si';
import {AiOutlineMenuFold} from 'react-icons/ai';
import {VscTasklist,VscNotebook} from 'react-icons/vsc';
import {CgNotes} from 'react-icons/cg';
import {GrCertificate} from 'react-icons/gr';
export default function Sidebar() {
  const history = useHistory();

  const [openthree, setOpenthree] = useState(false);
  const [show, setshow] = useState(true);
  const handleClickthree = () => {
    setOpenthree(!openthree);
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
       <div className="nav-item">
        <Link className="nav-link" to="/" style={{textDecoration:"none"}}>
         
         <span>  STUDENT</span><AiOutlineMenuFold />
        </Link>
        
      </div>

      <hr style={{color:"black"}} />
    <div>
      <div className="nav-item">
        <Link className="nav-link" to="/class" style={{textDecoration:"none"}}>
         
        <RiAccountPinCircleFill  /> <span>  CLASS</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link className="nav-link" to="/dashboard"  style={{textDecoration:"none"}}>
        
        <RiDashboardFill /> <span> DASHBOARD</span>
        </Link>
      </div>

      
      <div className="nav-item">
        <Link className="nav-link" to="/hackathon" style={{textDecoration:"none"}}>
         
         <MdAccountBalanceWallet /> <span>HACKATHON</span>
        </Link>
      </div>
      

      <div className="nav-item">
        <Link className="nav-link" to="/task" style={{textDecoration:"none"}}>
         
        <MdDashboardCustomize /> <span>TASKS</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link className="nav-link" to="/users" style={{textDecoration:"none"}}>
          
        <CgNotes />  <span>MOCK INTERVIEW</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/queries" style={{textDecoration:"none"}}>
         
        <SiJquery />  <span>QUERIES</span>
        </Link>
      </div>

         

      <div className="nav-item">
        <Link className="nav-link" to="/requirements" style={{textDecoration:"none"}}>
         
         <VscNotebook /> <span>REQUIREMENTS</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/capstone" style={{textDecoration:"none"}}>
        
        <MdSwitchAccount />  <span>CAPSTONE</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/applications" style={{textDecoration:"none"}}>
         
         <RiNewspaperLine /> <span>APPLICATIONS</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/interview" style={{textDecoration:"none"}}>
         
      <VscTasklist />   <span>INTERVIEW TASK</span>
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/Leave" style={{textDecoration:"none"}}>
          
         <MdOutlineTask /> <span>LEAVE-APPLICATION</span>
        </Link>
      </div>
      
      <div className="nav-item">
        <Link className="nav-link" to="/certificate" style={{textDecoration:"none"}}>
         
        <GrCertificate style={{color:"black"}} />  <span>CERTIFICATE</span>
        </Link>
      </div>
      </div> 
      <hr className="sidebar-divider" />
    </ul>
  );
}