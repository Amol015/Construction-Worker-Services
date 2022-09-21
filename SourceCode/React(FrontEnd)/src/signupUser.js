import React, { useState } from "react";

import axios from "axios";
import { Form } from "react-router-dom";
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
const getAll = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/cws1/getAllCustomers",{}).
    then((response) => {
        console.log(response.data)
    }).catch((e) => {
        console.log(e);
        alert("Empty ")})
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
    
  )
//   render ()
//   {
//     return(
//     <div>
//         <h1 className="text-center">Customer List</h1>
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <td>FirstName</td>
//                     <td>Lastname</td>
//                     <td>Mobile</td>
//                     <td>UserName</td>
//                     <td>Password</td>
//                     <td>EmailId</td>
//                     <td>Address</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     this.state.users.map(
//                       user=>
//                       <tr key={user.customer_id}>
//                         <td>{user.customer_id}</td>
//                         <td>{user.firstName}</td>
//                         <td>{user.lastName}</td>
//                         <td>{user.mobile}</td>
//                         <td>{user.userName}</td>
//                         <td>{user.password}</td>
//                         <td>{user.emailId}</td>
//                         <td>{user.address}</td>
//                       </tr>  
//                     )
//                 }
//             </tbody>
//         </table>
//     </div>
//     )
// }




}

export default CustomerRegs;