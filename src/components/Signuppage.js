import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import './login-signup.css';
import axios from './axios'

function Mainpage() {

    const [inputValue, setValue] = useState({
        username: "",
        password1: "",
        password2: "",
        date: "",

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

   
    const submitData = async (e) => {
        e.preventDefault();
     
        const { username, password1, password2 } = inputValue;
        console.log(inputValue);

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password1', password1);
        formData.append('password1', password2);
    

        try {
            const response = await axios.post('/user/newUser', formData, {
            });
        }

        catch (error) {
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (username === "") {
            alert("Enter username");
        }
        else if (!emailRegex.test(username)) {
            alert("Enter valid email address");
            document.getElementById('exampleInputEmail1').value = '';
            document.getElementById('exampleInputPassword1').value = '';
            document.getElementById('exampleInputPassword2').value = '';
        }
        else if (password1 === "") {
            alert("Enter password");
        }
        else if (password2 === "") {
            alert("Enter password");
        }
        else if (password1 != password2) {
            alert("Enter correct password");
            document.getElementById('exampleInputPassword1').value = '';
            document.getElementById('exampleInputPassword2').value = '';
        }
        else {
            swal({
                title: "Congratulations, !",
                text: "You Have Registered Successfully!!!",
                icon: "success",
                button: "Login",
                closeOnClickOutside: false,
            }).then(function () {
                window.location = "http://localhost:3000/Loginpage";
            });;
            localStorage.setItem("user", JSON.stringify([inputValue]));

        }
    }

    return (
        <div className='container mt-5' >
            <section className='contain d-flex justify-content-between'>
                <div className='leftpart mx-100' style={{ width: "100%" }} >
                    <h1 className='text text-center col-lg-8 im2'>Sign Up!</h1>
                    <form>
                        <div className="mb-3 col-lg-12 im1">
                            <label htmlFor="exampleInputEmail1" className="text form-label my-3">Email address</label>
                            <input type="email" onBlur={getData} required name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email-Address Here..' />
                        </div>
                        <div className="mb-3 col-lg-12 im1">
                            <label htmlFor="exampleInputPassword1" className="text form-label">Password</label>
                            <input type="password" onBlur={getData} required name='password1' className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password Here..' />
                        </div>
                        <div className="mb-3 col-lg-12 im1">
                            <label htmlFor="exampleInputPassword2" className="text form-label">Confirm Password</label>
                            <input type="password" onBlur={getData} required name='password2' className="form-control" id="exampleInputPassword2" placeholder='Enter Your Password Here Again..' />
                        </div>
                        <div className="mb-3 col-lg-20 my-10 im1">
                            <input type="date" onBlur={getData} required name='date' />
                        </div>
                        <button type="submit" className="btn btn-primary im3" style={{ width: "150" }} onClick={submitData}>Sign Up</button>
                    </form>
                    <p className='text mt-4 fw-bold im3'>Already Registered- <span><NavLink to='/Loginpage'>Sign-In</NavLink></span></p>
                </div>
                <div className='rightpart mt-5'>
                    <div className='img mt-5'>
                        <img src='./registeration.jpg' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mainpage
