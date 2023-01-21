import "./Update.css"
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
    const params = useParams();
    const navigate = useNavigate();
    const stdID = params.stdID;

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
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/students/${stdID}`).then((response) => {
            setStudentDetails(response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [stdID]);

    const handleInput = (value) => {
        return setStudentDetails(student => {
            return {...student, ...value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Updating student details...')
        try{
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/students/${stdID}`, studentDetails);
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
        }catch(error){
            console.log('Error: ', error)
        }
    }
    return(
        <div style={{width:"100%",backgroundColor:"#FFB833"}}>
        <div className="updateStudent" >
            <h2 style={{textAlign:"center"}}>Update an Student</h2><br/>
            <form onSubmit={handleSubmit} > 
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id='name' className="form-control" type='text' value={studentDetails.name} onChange={e => handleInput({name: e.target.value})} />
                </div><br/>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input id='gender' className="form-control" type='text' value={studentDetails.gender} onChange={e => handleInput({gender: e.target.value})} />
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
                    <input id='email' className="form-control" type='text' value={studentDetails.email} onChange={e => handleInput({Email: e.target.value})} />
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
                    <label htmlFor="contactNumber">Status</label>
                    <input id='status' className="form-control" type='text' value={studentDetails.status} onChange={e => handleInput({status: e.target.value})} />
                </div><br/>

                <div className='form-group'>
                    <input className='btn btn-primary mt-2' type='submit' value='Update an Employee' />
                </div>
            </form>
        </div>
        </div>  
    )
}


// import React from 'react'

// export default function Update() {
//   return (
//     <div>Update</div>
//   )
// }
