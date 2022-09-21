import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {

    constructor()
    {
        super();
        this.state={data:"Default"}
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        const [Login, setLogin] = ({
            email: "",  
            password: "",  
            
          });
          
        
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...Login, [name]: value });
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/cws1/login/{emaild}/{password}",{
         
            emailId: Login.emailId,
            password: Login.password,
        }).then((response) =>{
            console.log(response.data);
            alert("Login successful");
        }).catch((e) => {
            console.log(e);
            alert("Unsuccessful login")})
    }
        return (
            <form>

                <h3>Login As Customer</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" 
                                    onClick={handleClick}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}