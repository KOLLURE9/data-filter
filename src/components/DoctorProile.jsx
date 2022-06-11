import React,{useState,useEffect} from "react";
import axios from "axios"; 
//import Data from './data';
//import  from 'react/cjs/react.production.min';


const DoctorProile =()=>{
  //const [persondata,setPersonData]=useState([])
  const [filterData,setFilterData]=useState([])

  const [users,setUsers] = useState([]);
  const getAllUser = async () => {
    const response = await fetch("http://localhost:4006/profile/displaydoctors");
    setUsers(await response.json());
    console.log(users);
};

    useEffect(() => {
      getAllUser();
    },[]);

  

    const doctorFilterData=(e)=>{
        console.log(e.target.value);
        
        if(e.target.value=="cardiologists"){
            var filteredData= users.filter((users)=>{
                 return users.category=="Cardiologists"
             })
         }
         if(e.target.value=="endocrinologists"){
             var filteredData= users.filter((users)=>{
                  return users.category=="Endocrinologists"
              })
          }
          if(e.target.value=="gastroenterologists"){
             var filteredData= users.filter((users)=>{
                  return users.category=="Gastroenterologists"
              })
          }
          if(e.target.value=="obstetrician"){
              var filteredData= users.filter((users)=>{
                   return users.category=="Obstetrician"
               })
           }
           if(e.target.value=="dermatologists"){
             var filteredData= users.filter((users)=>{
                  return users.category=="Dermatologists"
              })
          }

         setFilterData(
           
            filteredData
        )
    }

    
         return (
        
        
            <div>
            <div>
            <div class="custom-control custom-radio">
           <input type="radio" value="cardiologists" id="customRadio1" name="customRadio" class="custom-control-input" onClick={doctorFilterData}/>
           <label class="custom-control-label" for="customRadio1">Cardiologists</label>
           </div>
           <div class="custom-control custom-radio">
           <input type="radio" value="endocrinologists" id="customRadio2" name="customRadio" class="custom-control-input" onClick={doctorFilterData}/>
           <label class="custom-control-label" for="customRadio2">Endocrinologists</label>
           </div>
           <div class="custom-control custom-radio">
           <input type="radio" value="gastroenterologists" id="customRadio3" name="customRadio" class="custom-control-input" onClick={doctorFilterData}/>
           <label class="custom-control-label" for="customRadio3">Gastroenterologists</label>
           </div>
           <div class="custom-control custom-radio">
           <input type="radio" value="obstetrician" id="customRadio4" name="customRadio" class="custom-control-input" onClick={doctorFilterData}/>
           <label class="custom-control-label" for="customRadio4">Obstetrician</label>
           </div>
           <div class="custom-control custom-radio">
           <input type="radio" value="dermatologists" id="customRadio5" name="customRadio" class="custom-control-input" onClick={doctorFilterData}/>
           <label class="custom-control-label" for="customRadio5">Dermatologists</label>
           </div>
            </div>

            <div><h2>TOTAL : {filterData.length}</h2></div>

           



     <select name="DoctorName">
    {filterData.map((e, key) => {
        return <option key={key} value={e.firstName}>{e.firstName}</option>;
    })}
</select>

            
            
        </div>
                
         );

}

export default DoctorProile;