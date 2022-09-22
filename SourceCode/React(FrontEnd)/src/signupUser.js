import React, { useState } from "react";
import axios from "axios";
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
import Navbar from "./component/Navbar";

function SignUp() {


    const [registration, setRegistration] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        userName: "",
        password: "",
        emailId: "",
        address: "",

    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegistration({ ...registration, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/cws1/registerCustomer", {
            firstName: registration.firstName,
            lastName: registration.lastName,
            mobile: registration.mobile,
            userName: registration.userName,
            password: registration.password,
            emailId: registration.emailId,
            address: registration.address,
        }).then((response) => {
            console.log(response.data);
            alert("Customer added");
        }).catch((e) => {
            console.log(e);
            alert("Customer not added")
        })
    }
    const getAll = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/cws1/getAllCustomers", {}).
            then((response) => {
                console.log(response.data)
            }).catch((e) => {
                console.log(e);
                alert("Empty ")
            })
    }
    return (



        <MDBContainer className="my-6">
            <Navbar></Navbar>

            <MDBCard>
                <MDBRow className='g-0'>



                    <MDBCol md='6'>
                        <form>

                            <br /><br /> <h3 style={{ textAlign: "center" }}>Register</h3>

                            <div className="form-group">
                                <label className="mx-4,my-4"> First name</label>
                                <input type="text" className="form-control" placeholder="First name" name="firstName" onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <br /> <label> Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" name="lastName" onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <br />  <label>Mobile no</label>
                                <input type="text" className="form-control" placeholder="Mobile No" name="mobile" onChange={handleChange} />
                            </div>


                            <div className="form-group">
                                <br />  <label>User Name</label>
                                <input type="text" className="form-control" placeholder="Username name" name="userName" onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <br />   <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <br /> <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" name="emailId" onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <br />  <label>Address : </label>
                                <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleChange} />
                            </div>


                            <br />  <button type="submit" onClick={handleClick} className="btn btn-dark btn-lg btn-block">Register</button>

                            &nbsp; <button type="submit" onClick={getAll} className="btn btn-dark btn-lg btn-block">GetAll</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="./login">log in?</a>
                            </p>


                        </form>
                    </MDBCol>

                    <MDBCol md='6'><br /><br /><br />
                        <MDBCardImage src='https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d' alt="login form" className='rounded-start w-100' height={650} />
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>


    );
}

export default SignUp;

