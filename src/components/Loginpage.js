import { useState } from "react"
import React from 'react'
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';
import './login-signup.css';
import axios from "axios";

function Loginpage() {


    const [inputValue, setValue] = useState({
        username: "",
        password1: "",
    });

    const getData = (e) => {

        const { name, value } = e.target;
        console.log(value)


        setValue(() => {
            return {
                ...inputValue,
                [name]: value
            }
        }
        );
    }

    const submitData = (e) => {
        e.preventDefault();

        const { username, password1 } = inputValue;

        if (username === "") {
            alert("Enter username");
        }
        else if (!username.includes('@')) {
            alert("Enter valid email address");
        }
        else if (password1 === "") {
            alert("Enter password");
        }
        else {

            axios.post('https://fantasyleague-pl7o.onrender.com/user/userLogin', {
                email: username,
                password: password1
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.success) {
                        alert("Logged in successfully!");
                        console.log("logged in successfully");
                        swal({
                            title: "Congratulations, !",
                            text: "You Have Logged-In Successfully!!!",
                            icon: "success",
                            button: "Redirect to Main Site!",
                            closeOnClickOutside: false,
                        }).then(function () {
                            window.location = "https://www.google.com/";
                        });;

                    } else {
                        alert("Enter Correct Credentials!!");
                        document.getElementById('exampleInputEmail1').value = '';
                        document.getElementById('exampleInputPassword1').value = '';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }


    return (
        <>
            <div className='container mt-5' >
                <section className='contain d-flex justify-content-between'>
                    <div className='leftpart mx-100' style={{ width: "100%" }} >
                        <h1 className='text text-center col-lg-8 im2'>Login-In!</h1>
                        <form>
                            <div className="mb-3 col-lg-12 im1">
                                <label htmlFor="exampleInputEmail1" className="text form-label my-3">Email address</label>
                                <input type="email" onBlur={getData} required name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email-Address Here..' />
                            </div>
                            <div className="mb-3 col-lg-12 im1">
                                <label htmlFor="exampleInputPassword1" className="text form-label">Password</label>
                                <input type="password" onBlur={getData} required name='password1' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here..' />
                            </div>
                            <button type="submit" className="btn btn-primary im3" style={{ width: "150" }} onClick={submitData}>Login</button>
                        </form>
                        <p className='text mt-4 fw-bold im3'>Haven't Registered-<span><NavLink to='/Signuppage'>Register-Now</NavLink></span></p>
                    </div>
                    <div className='rightpart mt-5'>
                        <div className='img mt-5'>
                            <img src='./login.avif' style={{ maxWidth: 400 }} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Loginpage
