import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Switch, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import CreateUser from "./CreateUser";
import { Mockinterview } from "./Mockinterview";
import Editusers from "./EditUser";
import { Certificate } from "./Certificate";
import { Leave } from "./Leave";
import { Interview } from "./Interview";
import { Applications } from "./Applications";
import { Requirements } from "./Requirements";
import { Capstone } from "./Capstone";
import { Hackathon } from "./Hackathon";
import { Task } from "./Task";
import { Dashboard } from "./Dashboard";
import { Class } from "./Class";
import { Student } from "./Student";
import { Capstonecontent } from "./Capstonecontent";
import { Response } from "./Response";
import { Hack } from "./Hack";
import { Query } from "./Query";
import { ApplyLeave } from "./ApplyLeave";
import { Querycontent } from "./Querycontent";
import { Recording } from "./Recording";
import { Login } from "./Login";
import { Sign } from "./Sign";

function App() {
  return (
    //Defining Routes for all the components and pages

    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Student />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/sign" exact>
              <Sign />
            </Route>
            <Route path="/class" exact>
              <Class />
            </Route>
            <Route path="/record" exact>
              <Recording />
            </Route>

            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>

            <Route path="/task" exact>
              <Task />
            </Route>
            <Route path="/hackathon" exact>
              <Hackathon />
            </Route>
            <Route path="/hack" exact>
              <Hack />
            </Route>

            <Route path="/capstone" exact>
              <Capstone />
            </Route>
            <Route path="/cap" exact>
              <Capstonecontent />
            </Route>
            <Route path="/response" exact>
              <Response />
            </Route>

            <Route path="/requirements" exact>
              <Requirements />
            </Route>
            <Route path="/applications" exact>
              <Applications />
            </Route>
            <Route path="/interview" exact>
              <Interview />
            </Route>
            <Route path="/queries" exact>
              <Query />
            </Route>
            <Route path="/query" exact>
              <Querycontent />
            </Route>
            <Route path="/Leave" exact>
              <Leave />
            </Route>
            <Route path="/apply" exact>
              <ApplyLeave />
            </Route>
            <Route path="/certificate" exact>
              <Certificate />
            </Route>

            <Route path="/users" exact>
              <UserProvider>
                <Mockinterview />
              </UserProvider>
            </Route>

            <Route path="/createuser" exact>
              <UserProvider>
                <CreateUser />
              </UserProvider>
            </Route>
            <UserProvider>
              <Route path="/users/edit/:id" component={Editusers}></Route>
            </UserProvider>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
