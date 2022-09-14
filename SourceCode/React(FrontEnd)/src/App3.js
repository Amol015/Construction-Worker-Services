import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './login'
import SignUp from './signupUser'
import Forgotpassword from './Forgotpassword';
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


function Appli() {
    return (

        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>
                    <h2 style={{ textAlign: 'center', color: 'Grey', background: 'skyblue' }}>Construction Worker Services</h2>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d' alt="login form" className='rounded-start w-100' height={550} />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0" style={{ color: 'darkred' }}></span>
                            </div>

                            <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', color: 'blue' }}>Sign into your account</h3>
                            <b style={{ color: 'darkblue' }}>Username</b>
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" />
                            <b style={{ color: 'darkblue' }}>Password</b>
                            <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}> <Link className="nav-link" to={'/forgotpassword'}>Forgot Password?</Link></p>

                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}> <Link className="nav-link" to={'/sign-up'}>Don't have an account? Register</Link></p>



                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>


    );
}

export default Appli;