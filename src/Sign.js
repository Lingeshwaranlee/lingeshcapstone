import { Link } from "react-router-dom";
 import './Login.css'
 import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
export function Sign( {Login,error}) {
  const [details,setDetails]=useState({firstname:'',lastname:'',phonenumber:'',email:"",password:""})
  const submitHandler= e =>{
    e.preventDefault();
    Login(details);
  }
  const history =useHistory(); 
  return (
    <div>
     <div className='login'>
      
      <div className='login__info'>
        <h1>create a new account</h1>
        <form className='login__form' onSubmit={submitHandler}>
        {(error !="") ? <div className="error">{error}</div> :""}
          <label htmlFor='firstname'>First Name</label>
          <input
            id='firstname'
            type='firstname'
            onChange={e=>setDetails({...details,firstname:e.target.value})} 
             value={details.firstname}
           
            
          />
          <label htmlFor='lastname'> Last Name</label>
          <input
            id='lastname'
            type='lastname'
            onChange={e=>setDetails({...details,lastname:e.target.value})} 
             value={details.lastname}
           
            
          />
           <label htmlFor='phonenumber'>Phone Number  </label>
          <input
            id='phonenumber'
            type='number'
            onChange={e=>setDetails({...details,phonenumber:e.target.value})} 
             value={details.phonenumber}
           
            
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
          
          <Button variant="contained" type='submit'  onClick={() => history.push("/login")} >Sign In</Button>
        </form>
       
      </div>
    </div>
    </div>
  );
}