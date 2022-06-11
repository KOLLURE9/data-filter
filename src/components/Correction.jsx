import React,{useState,useEffect} from "react";
import axios from "axios"; 
//import Data from './data';
//import  from 'react/cjs/react.production.min';

function Correction(){

//const Correction =()=>{
 // const [persondata,setPersonData]=useState([])
  //const [filterData,setFilterData]=useState([])

 /* useEffect(()=>{
      getUsers();
  },[] );

  const getUsers=async()=>{
      const response = await axios.get("http://localhost:4006/profile/displaydoctors");
      if(response.status===200){
        setPersonData(response.persondata);
      }
  };*/

  
    const [users,setUsers] = useState([]);
  const getAllUser = async () => {
    const response = await fetch("http://localhost:4006/profile/displaydoctors");
    setUsers(await response.json());
    console.log(users);
};

    useEffect(() => {
      getAllUser();
    },[]);

    
    return (
        <>
        { users.map((ce) => 
             <div key={ce.id}>
                 <h2>{ce.firstName}</h2>
                 <p>{ce.email}</p>
  
             </div>)}
       </>
      )
    
        
            

}

export default Correction;