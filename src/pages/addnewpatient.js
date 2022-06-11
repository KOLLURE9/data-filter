import React  from 'react';


function AddNewPatient(){

 

    return(

        
        <div className="container">
        <form>
            <div>
                <h1><center>Patient Details</center></h1>
            </div>
           
      
        <div className="form-group row">
            <label for="name" className="col-sm-2 col-form-label">Patient's Name</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="name" placeholder="K.A.P.I Perera" />
            </div>
        </div>

        <div className="form-group row">
            <label for="birthday" className="col-sm-2 col-form-label">Birthday</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="birthday" name="birthday"/>
            </div>
        </div>
      
        <div className="form-group row">
          <label for="age" className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="age" placeholder="Age"/>
          </div>
        </div>
      
      
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label className="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div className="form-check"><div className="col-sm-10">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label className="form-check-label" for="gridRadios2">
                 Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      
        <div className="form-group row">
            <label for="phoneno" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="phoneno" placeholder="+94xxxxxxxxx"/>
            </div>
        </div>
      
      
          
        <div className="form-group row">
          
            <label className="col-sm-2 col-form-label">Blood Group</label>
            <div className='col-sm-10'>
            <select  className='form-control'>
            <option className="col-form-label col-sm-2 pt-0" selected>Choose...</option>
              <option value="1">A+</option>
              <option value="2">B+</option>
              <option value="3">O+</option>
              <option value="3">AB+</option>
              <option value="1">A-</option>
              <option value="2">B-</option>
              <option value="3">O-</option>
              <option value="3">AB-</option>
            </select>
            </div>
          </div>
          
      
      
        <div className="form-group row">
          <label for="address" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="address" placeholder="No.21/5,Maradana road,Colombo"/>
          </div>
        </div>
      
      
       
          <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label clasclassNames="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
      
        
          <div className="row"></div>
      
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Save</button>
            
            <button type="submit" className="btn btn-primary">Cancel</button>
            
          </div>
          </div>
          
      
          </form>
          </div>
        
              


    )
}
export default AddNewPatient;