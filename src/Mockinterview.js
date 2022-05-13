import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


export function Mockinterview() {
  let { userData, setUserData } = useContext(UserContext);
  const handledelete = (index) => {
    let confirm = window.confirm("Are you sure, you want to delete?");
    if (confirm) {
      userData.splice(index - 1, 1);
      setUserData([...userData]);
    }
  };
  const history = useHistory();
  return (
    <div>
      <div className="top-container d-flex mb-4">
        <h2 className="stat"style={{paddingTop:'0px'}}>Mock Interview</h2>
        <Button variant="contained" onClick={() => history.push("/createuser")} style={{backgroundColor:" #4e73df",marginLeft:"44%"}}>Update Status</Button>
        
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="stat">Overall Performance</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0" }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Interview Round</th>
                  <th>Interview Date</th>
                  <th>Overall Score</th>
                  <th>Recording URL</th>
                  <th>Comment</th>
                  
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>ID</th>
                  <th>Name</th>
                  <th>Interview Round</th>
                  <th>Interview Date</th>
                  <th>Overall Score</th>
                  <th>Recording URL</th>
                  <th>Comment</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {userData.map((obj, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{obj.userName}</td>
                      <td>{obj.position}</td>
                      <td>{obj.office}</td>
                      <td>{obj.age}</td>
                      <td>{obj.startDate}</td>
                      <td>{obj.salary}</td>
                      <td>
                        <Link
                          to={"/users/edit/" + (index + 1)}
                          className="btn btn-sm btn-primary"
                          style={{color:" #4e73df"}}
                        >
                          <EditIcon/>
                        </Link>
                        <button
                          onClick={() => {
                            handledelete(index + 1);
                          }}
                          style={{color:" #4e73df"}}
                          className="btn btn-sm btn-danger ml-1"
                        >
                         <DeleteIcon/>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

