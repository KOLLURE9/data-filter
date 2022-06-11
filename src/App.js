import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';
import SignIn from "./pages/signin";
import HomePage from './pages/homepage';
import SignUp from './pages/signup';
import Settings from './pages/settings';
import AddNewPatient from './pages/addnewpatient';
//import NavBar from './pages/navigationbar';
import Log from './pages/log';
import DoctorProile from './components/DoctorProile';
import Correction from './components/Correction';
import '../node_modules/bootstrap/dist/css/bootstrap.css'



const App=()=> {
  return (
   <Router>
     
     <Routes>
       <Route exact path="/" element={<HomePage/>}/>
       <Route exact path="/signin"  element={<SignIn/>}/>
       <Route exact path="/doctorProile"  element={<DoctorProile/>}/>
       <Route exact path="/correction"  element={<Correction/>}/>
       <Route exact path="/signup"  element={<SignUp/>}/>
       <Route exact path="/settings"  element={<Settings/>}/>
       <Route exact path="/addnewpatient"  element={<AddNewPatient/>}/>
      
       
       <Route exact path="/log"  element={<Log/>}/>
       
     </Routes>
   </Router>
  );
}

export default App; 
