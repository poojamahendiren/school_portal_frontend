import React, { useEffect, useState } from "react";
import img from"../assets/students.png";
import img1 from "../assets/back.png";
import "./Students.css";
import { useNavigate,Link} from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';



export default function StudentList() {


  const navigate = useNavigate();  

  function handleEmployeeList(){
    navigate("/")
  }

  function handleAddEmployees(){
    navigate("/Students/add")
  }  

  const [students, setStudents] = useState([]);
    //to get all employees in list while rendering 
    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
      try{
          const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/Students`);
          setStudents(response.data);
      }catch(error){
          console.log('Error: ', error);
      }
  }

  const handleDelete = async (studentID) => {
    try{
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/students/${studentID}`);
        if(response){
            getStudents();
        }
    }catch(error){
        console.log(error);
    }
}




    return(
        <div style={{backgroundColor:"#FFB833",width:"100%",height:"200%" }}>
              
              <div className="header" >
                      
                <Button style={{paddingTop:"20px",paddingLeft:"20px",color:"white"}} onClick={handleEmployeeList}>Home</Button> 
                <Button style={{paddingTop:"20px",paddingLeft:"20px",color:"white"}}onClick={handleAddEmployees} >Add Students</Button>
              </div>

                    <div style={{paddingLeft:"100px"}}>
                        <img src={img} alt="" style={{width: "400px",height: "300px",float:"left",paddingTop:"65px"}}/>
                    </div>

                            <div style={{float:"left",paddingTop:"200px",paddingLeft:"60px",paddingRight:"50px"}}>
                                <p style={{color:"indigo",fontSize:"25px",fontFamily: "Kalam, cursive"}}> <b>Thinking is the capital, Enterprise is the way,<br/> HardWork is the solution !!!</b></p>
                            </div>

                                    <div style={{float:"left"}}>
                                    <img src={img1} alt="" style={{width: "258px",height: "500px"}}/>
                                    </div>
            
                                    <div style={{color:"black",'paddingLeft':"20px",'paddingRight':"20px"}}>
                                              <h2 style={{align:"left"}}>Our Students</h2><br/>
                                              <table className="table table-striped" style={{border:"2px solid black", color:"black",textAlign:"center",width:"100%",height:"100%"}}>
                                                  <thead>
                                                      <tr>
                                                          <th>Name</th>
                                                          <th>Gender</th>
                                                          <th>Date Of Birth</th>
                                                          <th>Date Of Admission</th>
                                                          <th>Email</th>
                                                          <th>Address</th>
                                                          <th>Grade</th>
                                                          <th>Contact Number</th>
                                                          <th>Status</th>
                                                          <th>Update</th>
                                                          
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      {students.length && students.map((student , index) => (
                                                          <tr key={index}>
                                                              <td>{student.name}</td>
                                                              <td>{student.Gender}</td>
                                                              <td>{student.DateOfBirth}</td>
                                                              <td>{student.DateOfAdmission}</td>
                                                              <td>{student.email}</td>
                                                              <td>{student.address}</td>
                                                              <td>{student.grade}</td>
                                                              <td>{student.contactNumber}</td>
                                                              <td>{student.Status}</td>
                                                              <td>
                                                                  <Link  className="btn btn-link"  to={`/students/${student._id}/update`}>Edit</Link>
                                                                  <button className="btn btn-link" onClick={() => handleDelete(student._id)}>Delete</button>
                                                              </td>
                                                          </tr>
                                                      ))}
                                                  </tbody>
                                              </table>    
                                          </div>
        </div>
     )}


    //  