// import React, { useState } from 'react';

// import { BrowserRouter as Router, Link } from 'react-router-dom'
// import axios from 'axios';


// import {
//     MDBBtn,
//     MDBContainer,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBRow,
//     MDBCol,
//     MDBIcon,
//     MDBInput
// }
//     from 'mdb-react-ui-kit';


// function LoginCustomer() {


//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post('http://localhost:8080/cws1/login/' + username + "/" + password, {}).
//             then((response) => {
//                 console.log(response.data)
//                 if (response.data === "pass") {
//                     alert("login success");
//                 }
//                 else {
//                     alert("Login fail");
//                 }
//             }).
//             catch((error) => {
//                 console.log("Incorrect Credentials")
//             })
//     }


//     return (

//         <MDBContainer className="my-5">

//             <MDBCard>
//                 <MDBRow className='g-0'>
//                     <h2 style={{ textAlign: 'center', color: 'Grey', background: 'skyblue' }}>Construction Worker Services</h2>

//                     <MDBCol md='6'>
//                         <MDBCardImage src='https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d' alt="login form" className='rounded-start w-100' height={550} />
//                     </MDBCol>

//                     <MDBCol md='6'>
//                         <MDBCardBody className='d-flex flex-column'>

//                             <div className='d-flex flex-row mt-2'>
//                                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
//                                 <span className="h1 fw-bold mb-0" style={{ color: 'darkred' }}></span>
//                             </div>

//                             <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', color: 'blue' }}>Sign into your account</h3>
//                             <b style={{ color: 'darkblue' }}>Username</b>
//                             <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" />
//                             <b style={{ color: 'darkblue' }}>Passwordssssss</b>
//                             <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" />

//                             <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>

//                             <a className="small text-muted" href="todo">Forgot password?</a>
//                             <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}> <Link className="nav-link" to={'/sign-up'}>Don't have an account? Register</Link></p>



//                         </MDBCardBody>
//                     </MDBCol>

//                 </MDBRow>
//             </MDBCard>

//         </MDBContainer>


//     );
// }

// export default LoginCustomer;





import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Login from './login';
import CustomerLogin from './component/AuthenticateService';
import SignUp from './signupUser';
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
export default function LoginCustomer() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/cws1/login/' + username + "/" + password, {}).
            then((response) => {
                console.log(response.data)
                if (response.data === "pass") {
                    alert("login success");

                    navigate("/servicepage")

                    //  CustomerLogin(username);
                }
                else {
                    alert("Login fail");
                }
            })

    }
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
                            <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => { setUsername(e.target.value) }} />
                            <b style={{ color: 'darkblue' }}>Password</b>
                            <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => { setPassword(e.target.value) }} />
                            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Login</MDBBtn>
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}> <Link className="nav-link" to={'/sign-up'}>Don't have an account? Register</Link></p>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>

    );
}


