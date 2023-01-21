import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./Add.css"
export default function AddStudent() {
    const navigate = useNavigate();
    //2(storing empty statevar)
    const [studentDetails, setStudentDetails] = useState({
                    name: '',
                    Gender: '',
                    DateOfBirth: '',
                    DateOfAdmission: '',
                    email: '',
                    address: '',
                    grade:'',
                    contactNumber:'',
                    Status:'',
    })


    //3(updating sv input values)
    const handleInput = (value) => {
        return setStudentDetails(student => {
            return {...student, ...value}
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/students`, studentDetails);
            //console.log(error);
            if(response){
                setStudentDetails({
                    name: '',
                    Gender: '',
                    DateOfBirth: '',
                    DateOfAdmission: '',
                    email: '',
                    address: '',
                    grade:'',
                    contactNumber:'',
                    Status:'',
    
                });
                navigate('/Students');
            }
            
        } catch (error) {
            console.log('Error:',error);
            console.log(studentDetails);
        }
    }

    //1(ui)
    return(
        <div style={{width:"100%",backgroundColor:"#FFB833"}}>
        <div className="addStudent" >                                                                     
            <h2 style={{textAlign:"center"}}>Add an Student</h2><br/>
            <form onSubmit={handleSubmit}> 
            <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id='name' className="form-control" type='text' value={studentDetails.name} onChange={e => handleInput({name: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="Gender">Gender</label>
                    <input id='Gender' className="form-control" type='text' value={studentDetails.Gender} onChange={e => handleInput({Gender: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="DateOfBirth">DateOfBirth</label>
                    <input id='DateOfBirth' className="form-control" type='text' value={studentDetails.DateOfBirth} onChange={e => handleInput({DateOfBirth: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="DateOfAdmission">DateOfAdmission</label>
                    <input id='DateOfAdmission' className="form-control" type='text' value={studentDetails.DateOfAdmission} onChange={e => handleInput({DateOfAdmission: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id='email' className="form-control" type='text' value={studentDetails.email} onChange={e => handleInput({email: e.target.value})}/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input id='address' className="form-control" type='text' value={studentDetails.address} onChange={e => handleInput({address: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <input id='grade' className="form-control" type='text' value={studentDetails.grade} onChange={e => handleInput({grade: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="contactNumber">ContactNumber</label>
                    <input id='contactNumber' className="form-control" type='text' value={studentDetails.contactNumber} onChange={e => handleInput({contactNumber: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="Status">Status</label>
                    <input id='Status' className="form-control" type='text' value={studentDetails.Status} onChange={e => handleInput({Status: e.target.value})} />
                </div><br/>

                <div className='form-group'>
                    <input className='btn btn-primary mt-2' type='submit' value='Add a Student' />
                </div>
            </form>
        </div>
        </div>
    )
}
