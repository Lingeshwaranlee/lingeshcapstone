import { Link } from "react-router-dom";
import './Login.css'
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

//Login page component
export function Login( {Login,error}) {
 const [details,setDetails]=useState({name:'',email:"",password:""})
 const submitHandler= e =>{
   e.preventDefault();
   Login(details);
 }
 const history =useHistory(); 
 return (
   <div>
    <div className='login'>
     
     <div className='login__info'>
       <h1>Sign In</h1>
       <form className='login__form' onSubmit={submitHandler}>
       {(error !="") ? <div className="error">{error}</div> :""}
         <label htmlFor='name'>NAME</label>
         <input
           id='name'
           type='name'
           onChange={e=>setDetails({...details,name:e.target.value})} 
            value={details.name}
          
           
         />
         <label htmlFor='email'>Email Address</label>
         <input
           id='email'
           type='email'
           onChange={e=>setDetails({...details,email:e.target.value})} 
            value={details.email}
          
           
           
         />
         <label htmlFor='password'>Password</label>
         <input
           id='password'
           type='password'
           onChange={e=>setDetails({...details,password:e.target.value})}
             value={details.password}
          
          
         />
         
         <Button variant="contained" type='submit'  onClick={() => history.push("/class")} >Sign In</Button>
       </form>
       <div className='login__divider'>
         <hr /> <span>OR</span> <hr />
       </div>
       <Link to='/sign'>
         
         <Button variant="contained">create account</Button>
       </Link>
     </div>
   </div>
   </div>
 );
}