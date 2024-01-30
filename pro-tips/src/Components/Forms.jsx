import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/Forms.css"

const Forms = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const [formError, setFormError] = useState({});
  const [fSubmit, setFSubmit] = useState(false);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let errors = validate(formData);
    console.log(errors);
    setFormError(errors);

    let errorKey = Object.keys(errors);
    if (errorKey.length == 0) {
      // let the user to register
      toast("Registraion Successful!");
      setFSubmit(true);
    } else {
      setFSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstname.trim() == "") {
      error.firstname = "Please enter the firstname";
    }
    if (data.lastname.trim() == "") {
      error.lastname = "Please enter the lastname";
    }
    if (data.email.trim() == "") {
      error.email = "Please enter the email";
    }
    if (data.phoneNumber.trim() == "" || data.phoneNumber.trim().length < 10) {
      error.phoneNumber = "Please enter the phone number";
    }
    return error;
  };

  return (
    <>
      <div className="form-parent">
        <ToastContainer />
        <form onSubmit={formSubmit}>
          <div className="tost">{fSubmit && <p>Registration Sucessful!</p>}</div>
          <label htmlFor="firstname">Enter first name</label>
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            onChange={handleInput}
          /> <br />
          {formError.firstname ? <p>{formError.firstname}</p> : ""}

          <label htmlFor="lastname">Enter last name</label>
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            onChange={handleInput}
          /> <br />
          {formError.lastname ? <p>{formError.lastname}</p> : ""}

          <label htmlFor="email">Enter email</label> <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleInput}
          /> <br />
          {formError.email ? <p>{formError.email}</p> : ""}

          <label htmlFor="phoneNumber">Enter phone number</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="phone number"
            onChange={handleInput}
          /> <br />
          {formError.phoneNumber ? <p>{formError.phoneNumber}</p> : ""}

          <input type="submit" value={"Register"} />
        </form>
      </div>
    </>
  );
};

export default Forms;
