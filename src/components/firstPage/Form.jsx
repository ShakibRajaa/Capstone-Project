import React, { useState,useEffect } from "react";
import './Module.Form.css'

const Form = () =>{
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobileNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    userName: "",
    email: "",
    mobileNumber: "",
    isChecked:""
  });
  const [isChecked,setIsChecked] = useState(false);
  const handleChecked =()=>{
    if(!isChecked){
      setIsChecked(true);
    }else{
      setIsChecked(false);
    }
  }
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };
  
  const validateForm = () => {
    const errors = {};
    let flag=0;

    if (!formData.name) {
      errors.name = "Name is required";
      flag=1;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      flag=1;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      flag=1;
    }

    if (!formData.userName) {
      errors.userName = "User Name is required";
      flag=1;
    } else if (formData.userName.length < 6) {
      errors.userName = "User Name must be at least 6 characters";
    }

    if (!formData.mobileNumber) {
      errors.mobileNumber = "Mobile Number required";
      flag=1;
    }
    else if(formData.mobileNumber.length<10){
        errors.mobileNumber = "mobile Number is not Valid";
        flag=1;
    }
    if(!isChecked){
      errors.isChecked = "Click on Ckecked Button";
      flag=1;
    }
    if(flag==1){
      setFormErrors(errors);
      return false;
    }
    let formDataAsString=JSON.stringify(formData);
    localStorage.setItem('formData',formDataAsString);
    setFormErrors(errors);
      setFormData({name: "",
      userName: "",
      email: "",
      mobileNumber: "",
    });
    //setIsChecked(false);
    return;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return(
    <div className="formContainer">
        <p className="formHeading">Super App</p>
        <p style={{color:"#ffffff",fontSize:"1.3rem",letterSpacing:"0.055em",textAlign:"center"}}>Create your new account.</p>
        <p style={{color:"#ffffff",fontSize:"1.5rem",fontWeight:"600",textAlign:"center"}}>Email  |  Google</p>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            
          />
          <span>{formErrors.name}</span>
        </div>

        <div>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
          />
          <span>{formErrors.userName}</span>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>{formErrors.email}</span>
        </div>
        
        <div>
          <input
            type="number"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <span>{formErrors.mobileNumber}</span>
        </div>

        <div className="checkedButton">
          <input
            type="checkbox"
            ckecked={formData.isChecked}
            onChange={handleChecked}
          />
          Share my registration data with Superapp<br/>
          <span>{formErrors.isChecked}</span>

        </div>

        <button type="submit">Sign Up</button>

        </form>
        <div className="comment">
        <p>By clicking on Sign up. you agree to Superapp<span > Terms<br/> and Conditions of Use</span></p>
        <p>To learn more about how Superapp collects, uses, shares and<br/> protects your personal data please head Superapp <span>Privacy <br/>Policy</span></p>
        </div>
    </div>
  )
}

export default Form;
