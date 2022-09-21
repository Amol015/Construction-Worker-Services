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


function LoginCustomer() {
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
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}> <Link className="nav-link" to={'/sign-up'}>Don't have an account? Register</Link></p>



                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>


    );
}

export default LoginCustomer;





// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './Login.css';
// import { withRouter } from 'react-router-dom';
// import { Route } from 'react-router';

// class UserLogin extends Component {

//     constructor() {
//         super();
//         this.state = {
//             data: [],
//             username: "",
//             password: "",
//             token: "",
//         };
//     } //end constructor

//     componentWillMount() {
//     }

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData() {
//         fetch('http://theapi/api/auth', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 username: 'myUserName',
//                 password: 'myPassword',
//                 Authorization: 'TheReturnedToken',
//             })
//         }) /*end fetch */
//             .then(results => results.json())
//             .then(data => this.setState({ data: data })

//             )
//     }

//     //request the token
//     requestAccessToken(data) {
//         const loginInfo = '${data}&grant_type=password';
//         return fetch('${API_URL}Token', {
//             method: 'POST',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//             }),
//             body: loginInfo,
//         })
//             .then((response) => response.json());
//     }

//     //authenticate request
//     requestUserInfo(token) {
//         return fetch('${API_URL}api/participant/userinfo', {
//             method: 'GET',
//             headers: new Headers({
//                 Authorization: 'Bearer ${token}',
//             }),
//         })
//             .then((response) => response.json());
//     }

//     change = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }; //end change

//     onSubmit = (e) => {
//         this.fetchData();
//         e.preventDefault();
//         //console.log(this.state);
//         this.setState({
//             username: "",
//             password: "",
//         });

//         this.props.history.push('/landing');
//     };

//     render() {
//         console.log(this.state.data);
//         return (
//             <div>
//                 <div className="loginContainer">
//                     <h2>Member Login</h2>
//                     <form>
//                         <input
//                             id="username"
//                             name="username"
//                             placeholder="User Name"
//                             value={this.state.username}
//                             onChange={e => this.change(e)}
//                             className="form-control"
//                         />  <br />

//                         <input
//                             id="password"
//                             name="password"
//                             type="password"
//                             placeholder="Password"
//                             value={this.state.password}
//                             onChange={e => this.change(e)}
//                             className="form-control"
//                         />  <br />

//                         <button onClick={e => this.onSubmit(e)} className="btn btn-primary">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default withRouter(UserLogin);




// import React from "react";
// import { useState } from "react";
// import AuthenticateService from "./AuthenticateService";
// import axios from "axios";
// import { useEffect } from "react";

// function Appli() {
//     const myStyle = {
//         backgroundImage:
//             "url('https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
//         height: '100vh',
//         marginTop: '0px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };



//     var [login, setLogin] = useState({ user_name: '', password: '' });

//     var handleChange = (e) => {
//         e.preventDefault();
//         var name = e.target.name;
//         var value = e.target.value;
//         setLogin({ ...login, [name]: value, });
//     };

//     console.log(login)
//     var onSubmit = (e) => {
//         e.preventDefault();

//         axios
//             .post(`http://localhost:8080/cws/login/${user_name}/${password}`, {
//                 user_name: login.user_name,
//                 password: login.password,
//             })
//             .then((response) => {
//                 console.log(response.data);

//                 if (response.data === "pass") {

//                     // AuthenticateService.farmerLogin(login.user_name);

//                     setLogin({ user_name: '', password: '' });
//                     alert("login success....")
//                     //window.location="#"

//                 }
//                 else {
//                     console.log(login.user_name);

//                     setLogin({ user_name: '', password: '' });
//                     alert("Invalid Password/Username");

//                 }

//             })
//             .catch((error) => {
//                 console.log(error.response);
//             });
//     }
//     return (<>

//         <div className="container-fluid" style={myStyle}>
//             <div className="row rounded" >
//                 <div className="col-md-4 offset-md-4 " >
//                     <div className="login-form bg-light mt-4 p-4 " style={{ borderRadius: "30px" }} >
//                         <form onSubmit={onSubmit} className="row g-3" >
//                             <h4 className="text-center">Farmer-Login</h4>

//                             <div className="col-12 d-flex flex-row">

//                                 <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/456/456212.png" style={{ height: "20px", width: "20px" }}></img>
//                                 <input type="text" name="user_name" className="form-control" placeholder="Username"
//                                     value={login.user_name}
//                                     onChange={handleChange} />
//                             </div>
//                             <div className="col-12 d-flex flex-row">

//                                 <img className="mt-2 me-2" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" style={{ height: "20px", width: "20px" }}></img>
//                                 <input type="password" name="password" className="form-control" placeholder="Password"
//                                     value={login.password}
//                                     onChange={handleChange} />
//                             </div>

//                             <div className="col-12 text-center">
//                                 <button type="submit" class="btn btn-dark ">Login</button>
//                             </div>
//                         </form>
//                         <hr className="mt-4" />
//                         <div className="col-12">
//                             <p className="text-center mb-0">Have not account yet? <a href="/Buyer-reg">Sign-up</a></p>
//                             <p className="text-center mb-0"><a href="/forgot-password">Forgot password?</a></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>

//     );
// }

// export default Appli;