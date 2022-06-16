import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "./UserContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//creating user 
function CreateUser() {
  const [userName, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  let handlesubmit = (e) => {
    e.preventDefault();
    let objvalues = { userName, position, office, age, startDate, salary };
    setUserData([...userData, objvalues]);
    history.push("/users");
  };

  return (
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
    <div>
      <h3 className="ml-3 mb-4">Create New user</h3>
      <div className="container">
        <form className="p-2" onSubmit={handlesubmit} >
          <div className="row mb-3">
            <div className="col-lg-6">
              
              <TextField id="outlined-basic" label="Name" variant="outlined"  type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="form-control"/>
            </div>
            <div className="col-lg-6">
              
              <TextField id="outlined-basic" label="Mock Interview" variant="outlined"  type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="form-control"/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              
              <TextField id="outlined-basic" label="" variant="outlined"  type="date"
                value={office}
                onChange={(e) => setOffice(e.target.value)}
                className="form-control" />
            </div>
            <div className="col-lg-6">
             
              <TextField id="outlined-basic" label="Overall Score" variant="outlined" type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
             
              <TextField id="outlined-basic" label="Recording URL" variant="outlined" type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="form-control" />
            </div>
            <div className="col-lg-6">
             
              <TextField id="outlined-basic" label="Comment" variant="outlined"  type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="form-control" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="submitbtn">
              
              <Button  type="submit"
              style={{backgroundColor:" #4e73df",color:"white"}}
                value="Create"
                className="btn submitbtnn btn-primary">Create</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Box>
  );
}

export default CreateUser;