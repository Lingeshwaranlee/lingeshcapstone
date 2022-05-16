import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { RiAccountBoxFill,RiAccountPinCircleFill,RiDashboardFill ,RiNewspaperLine} from 'react-icons/ri';
import { MdDashboardCustomize,MdSettingsApplications,MdAccountBalanceWallet,MdSwitchAccount,MdOutlineTask} from 'react-icons/md';
import {SiJquery} from 'react-icons/si';
import {DiRequirejs} from 'react-icons/di';
import {VscTasklist,VscNotebook} from 'react-icons/vsc';
import {CgNotes} from 'react-icons/cg';
import {GrCertificate} from 'react-icons/gr';
export default function Sidebar() {
  const history = useHistory();

  const [openthree, setOpenthree] = useState(false);

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
         
        <RiAccountBoxFill /> <span>  STUDENT</span>
        </Link>
      </div>

      <hr style={{color:"black"}} />
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
        <Link className="nav-link" to="/users" style={{textDecoration:"none"}}>
          
        <CgNotes />  <span>MOCK INTERVIEW</span>
        </Link>
      </div>

      

      <div className="nav-item">
        <Link className="nav-link" to="/task" style={{textDecoration:"none"}}>
         
        <MdDashboardCustomize /> <span>TASKS</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link className="nav-link" to="/hackathon" style={{textDecoration:"none"}}>
         
         <MdAccountBalanceWallet /> <span>HACKATHON</span>
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
      
      <hr className="sidebar-divider" />
    </ul>
  );
}