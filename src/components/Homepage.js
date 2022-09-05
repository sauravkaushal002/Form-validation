import React, { useState } from "react";
import Swal from "sweetalert2";
const Homepage = () => {
  const [form, setForm] = useState([]);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    Phonenumber: "",
    DOB: "",
    gender: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };
 

  const submitform = (e) => {
    e.preventDefault();
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const { firstname, lastname, email, password, Phonenumber, DOB, gender } =
      data;
    if (
      firstname &&
      lastname &&
      regex.test(email) === true &&
      password &&
      Phonenumber &&
      DOB &&
      gender
    ) {
      console.log(data);
      setForm([...form, data]);
    } else {
      Swal.fire({
        title: "Please Fill All Fields Properly",

        text: "Email should be Valid : E.g -saurav@gmail.com.",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className=",rounded-2xl shadow-2xl w-80 mt-10 h-50 ">
          <div className="grid  justify-center">
            <h1 className="text-2xl font-bold">Registration Form</h1>
            <form onSubmit={(e) => submitform(e)} className="mt-4">
              <h1> Firstname: </h1>
              <input
                name="firstname"
                onChange={handleChange}
                className="border-2 mb-2"
                placeholder=" Enter Your Firstname"
                type="text"
              />
              <h2> lastname: </h2>
              <input
                name="lastname"
                onChange={handleChange}
                placeholder="Enter Your Lastname "
                className=" border-2 mb-2"
                type="text"
              />
              <h3>email:</h3>
              <input
                name="email"
                onChange={handleChange}
                placeholder=" Enter Your Email"
                className=" border-2 mb-2"
                type="email"
              />
              <h4>password:</h4>
              <input
                name="password"
                onChange={handleChange}
                placeholder=" Enter Your Password"
                className=" border-2 mb-2"
                type="password"
              />
              <h5>Date Of Birth:</h5>
              <input
                name="DOB"
                onChange={handleChange}
                placeholder="DD/MM/YY"
                className=" border-2 mb-2"
              />
              <h6>Phone Number:</h6>
              <input
                name="Phonenumber"
                onChange={handleChange}
                placeholder="Enter your number"
                className=" border-2 mb-2"
                type="number"
              />
              <br></br>
              Gender:
              <input
                onChange={handleChange}
                type="radio"
                value="Male"
                name="gender"
              />
              Male
              <input
                onChange={handleChange}
                type="radio"
                value="Female"
                name="gender"
              />{" "}
              Female
              <input
                onChange={handleChange}
                type="radio"
                value="Other"
                name="gender"
              />{" "}
              Other
              <br></br>
              <button
                onClick={submitform}
                className="bg-gray-300 ml-16 pr-2 pl-2 mt-2 mb-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        {form?.map((value, index) => {
          return (
            <>
              <div className="mt-4 grid justify-center" key={index}>
                <h1 className="text-2xl">Your Details</h1>
                <p> Firstname : {value.firstname}</p>
                <div> lastname : {value.lastname}</div>
                <div>Email : {value.email}</div>
                <div>Password : {value.password}</div>
                <div> Date Of Birth : {value.DOB}</div>
                <div> Phone Number : {value.Phonenumber}</div>
                <div> Gender : {value.gender}</div>

                <hr />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
