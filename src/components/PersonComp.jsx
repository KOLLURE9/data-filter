import React,{useState} from "react";
import Data from './data';
//import  from 'react/cjs/react.production.min';

const PersonComp =()=>{
  const [persondata,setPersonData]=useState(Data.data)
  const [filterData,setFilterData]=useState([])

    const doctorFilterData=(e)=>{
        console.log(e.target.value);
        
        if(e.target.value=="cardiologists"){
           var filteredData= persondata.filter((data)=>{
                return data.category=="Cardiologists"
            })
        }
        if(e.target.value=="endocrinologists"){
            var filteredData= persondata.filter((data)=>{
                 return data.category=="Endocrinologists"
             })
         }
         if(e.target.value=="gastroenterologists"){
            var filteredData= persondata.filter((data)=>{
                 return data.category=="Gastroenterologists"
             })
         }
         if(e.target.value=="obstetrician"){
             var filteredData= persondata.filter((data)=>{
                  return data.category=="Obstetrician"
              })
          }
          if(e.target.value=="dermatologists"){
            var filteredData= persondata.filter((data)=>{
                 return data.category=="Dermatologists"
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
        return <option key={key} value={e.name}>{e.name}</option>;
    })}
</select>

            <div className="container">
                <div className="row">
                    {
                        filterData.map((data)=>{

                            return <div className="col-md-4">
                                    <div className="card mt-3">
                                        <div className="card-header bg-dark text-white">
                                           <h5>Name:{data.name}</h5>
                                        </div>
                                        <div className="card-body">
                                             
                                            <h5>Category:{data.category}</h5>
                                            <h5>Name:{data.name}</h5>
                                            <h5>Experience:{data.experience}</h5>
                                            <h5>Language:{data.language}</h5>
                                            <h5>Contact_Number:{data.contact_Number}</h5>
                                            <h5>Email:{data.email}</h5>
                                            <h5>University:{data.university}</h5>
                                        </div>
                                    </div>
                                </div>
                            
                        })
                    }

                </div>
            </div>
        </div>
                
         );

}

export default PersonComp;