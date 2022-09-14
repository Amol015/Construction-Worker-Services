import React from 'react';
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


function SignUp() {
    return (

        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d' alt="login form" className='rounded-start w-100' height={550} />
                    </MDBCol>

                    <MDBCol md='6'>
                        <form>
                            <h3>Register</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="Username name" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <label>Mobile no</label>
                                <input type="text" className="form-control" placeholder="Mobile No" />
                            </div>

                            <div className="form-group">
                                <label>Address : </label>
                                <input type="text" className="form-control" placeholder="Address" />
                            </div>


                            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="#">log in?</a>
                            </p>
                        </form>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>


    );
}

export default SignUp;