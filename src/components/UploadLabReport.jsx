import React from "react";
import * as  icons from 'react-icons/ai';
import NavBar from "./navigationbar";
import SearchBar from "./SearchBar";

function UploadLabReport(){
    return(

        <>
      <div className="form-body-up">
      <NavBar/>
      <SearchBar/>
    
      <div className="form" >
      <div className="container">
      <form className="form-style">

     <div class="form-group">
    <label for="patientID">Enter Patient ID</label>
    <i class="fa fa-envelope icon"></i>
    <input type="text" class="form-control" id="patientID" placeholder="Choose patient ID"/>
    </div>

    <div class="form-group">
    <label for="PatientName">Enter Patient Name</label>
    <input type="text" class="form-control" id="PatientName" placeholder="Mr.Amal Perera"/>
  </div>

  <div class="form-group">
    <label for="emailAddress">Enter Email</label>
    <input type="text" class="form-control" id="emailAddress" placeholder="abc@gmail.com"/>
  </div>
          
      </form>
      </div>

      </div> 
      </div> 
      
      </>
        
    )
}
export default UploadLabReport;