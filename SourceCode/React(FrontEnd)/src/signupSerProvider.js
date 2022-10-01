import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


import Login from './login'
import SignUp from './signupUser'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';


function SignUpSP() {

    const [registration, setRegistration] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        userName: "",
        password: "",
        emailId: "",
        city: "",
        role: "",
        isVerified: "",


    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegistration({ ...registration, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/cws/register", {
            firstName: registration.firstName,
            lastName: registration.lastName,
            mobile: registration.mobile,
            userName: registration.userName,
            password: registration.password,
            emailId: registration.emailId,
            city: registration.city,
            role: registration.role,
            isVerified: registration.isVerified,
        }).then((response) => {
            console.log(response.data);
            alert("Service Provider added");
        }).catch((e) => {
            console.log(e);
            alert("Service Provider not added")
        })
    }
    const getAll = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/cws/getAll", {}).
            then((response) => {
                console.log(response.data)
            }).catch((e) => {
                console.log(e);
                alert("Empty ")
            })
    }
    return (

        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d' alt="login form" className='rounded-start w-100' height={550} />
                    </MDBCol>

                    <MDBCol md='6'>
                        <form>
                            <h3>Register As Service Provider</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" name='firstName' onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" name='lastName' onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="number" className="form-control" placeholder="Enter Mobile Number" name='mobile' onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="Username name" name='userName' onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Email Id</label>
                                <input type="email" className="form-control" placeholder="Enter Email-Id" name='emailId' onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>City </label>
                                <input type="text" className="form-control" placeholder="Enter City" name='city' onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Role </label>
                                <input type="text" className="form-control" placeholder="Enter Role" name='role' onChange={handleChange} />
                            </div>

                            <button type="submit" onClick={handleClick} className="btn btn-dark btn-lg btn-block">Register</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="./login">log in?</a>
                            </p>
                        </form>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>


    );
}

export default SignUpSP;