import React, { useState } from "react";

import axios from "axios";
function CustomerRegs()
{
    
    const [registration, setRegistration] = useState({
      firstname: "",
      lastname: "",
        email: "",
        contact: "",
        user_name: "",
        address:"",
        password: "",  
        
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
        alert("User added");
    }).catch((e) => {
        console.log(e);
        alert("user not added")})
}

  return (
   
      <>
     firstName <input type='text' name="firstName" onChange={handleChange}/>
     lastName <input type='text' name="lastName" onChange={handleChange}/>
     mobile <input type='text' name="mobile" onChange={handleChange}/>
    userName <input type='text' name="userName" onChange={handleChange}/>
     password <input type='text' name="password" onChange={handleChange}/>
    emailId  <input type='text' name="emailId" onChange={handleChange}/>
    address  <input type='text' name="address" onChange={handleChange}/>
      <input type='submit' value="add user" onClick={handleClick}/><br/>
    


    </>
    
  );
};

export default CustomerRegs;