// import React, { Component } from "react";


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

// function SignUp() {
//     return (

//         <MDBContainer className="my-6">

//             <MDBCard>
//                 <MDBRow className='g-0'>



//                     <MDBCol md='6'>
//                         <form>

//                             <h3 style={{ textAlign: "center" }}>Register</h3>

//                             <div className="form-group">
//                                 <label className="mx-4,my-4"> First name</label>
//                                 <input type="text" className="form-control" placeholder="First name" />
//                             </div>

//                             <div className="form-group">
//                                 <br /> <label> Last name</label>
//                                 <input type="text" className="form-control" placeholder="Last name" />
//                             </div>

//                             <div className="form-group">
//                                 <br />  <label>Mobile no</label>
//                                 <input type="text" className="form-control" placeholder="Mobile No" />
//                             </div>


//                             <div className="form-group">
//                                 <br />  <label>User Name</label>
//                                 <input type="text" className="form-control" placeholder="Username name" />
//                             </div>

//                             <div className="form-group">
//                                 <br />   <label>Password</label>
//                                 <input type="password" className="form-control" placeholder="Enter password" />
//                             </div>

//                             <div className="form-group">
//                                 <br /> <label>Email</label>
//                                 <input type="email" className="form-control" placeholder="Enter email" />
//                             </div>

//                             <div className="form-group">
//                                 <br />  <label>Address : </label>
//                                 <input type="text" className="form-control" placeholder="Address" />
//                             </div>


//                             <br />  <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
//                             <p className="forgot-password text-right">
//                                 Already registered <a href="./login">log in?</a>
//                             </p>

//                         </form>
//                     </MDBCol>

//                     <MDBCol md='6'>
//                         <MDBCardImage src='https://www.bing.com/th/id/OGC.155942bd98fd614da19b4a1a942f4d80?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f1536793%2fscreenshots%2f3434500%2fvideoconstruc2.gif&ehk=fge2wILmOaGlGCQLjLDHLXUccVP%2fsWviVg6W0UYBPx8%3d' alt="login form" className='rounded-start w-100' height={650} />
//                     </MDBCol>

//                 </MDBRow>
//             </MDBCard>

//         </MDBContainer>


//     );
// }

// export default SignUp;




import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import React from "react";
import axios from "axios";

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
        alert("User added");
    }).catch((e) => {
        console.log(e);
        alert("User not added");
    })
}


const getAll = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/cws1/getAllCustomers", {}).
        then((response) => {
            console.log(response.data)
        }).catch((e) => {
            console.log(e);
            alert("User not added")
        })
}

const SignUp = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        userName: "",
        password: "",
        confirmPassword: "",
        emailId: "",
        address: "",
    });

    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            errorMessage: "Please Enter First Name",
            label: "First Name",
            required: true,

        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            errorMessage: "It should be a valid Name",
            label: "Last Name",
            required: true,

        },
        {
            id: 3,
            name: "mobile",
            type: "text",
            placeholder: "Mobile Number",
            errorMessage: "It should be a valid Name",
            label: "Mobile Number",
            required: true,

        },

        {
            id: 4,
            name: "userName",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },

        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
        {
            id: 7,
            name: "emailId",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 8,
            name: "address",
            type: "text",
            placeholder: "Address",
            label: "Address",
            required: true,
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="app">


            <form onSubmit={handleSubmit}>
                <br /><br />  <h1 style={{ backgroundColor: 'yellow' }}>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;