import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneno, setPhoneno] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")
    const role_id = "6256e2fbead5d9629ca46329"

    const navigate = useNavigate();
  

    async function signUp() {
        let item = { firstName, lastName, email, password, phoneno, gender, dob, role_id }
        // console.log("data ", item);
        // console.warn(item)

        let result = await fetch("https://onlinerestaurantbackend.herokuapp.com/user/add", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        // console.warn("result", result)
        navigate("/")
    }

    return (
        <>
            <div id="reservation" class="reservations-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="form-reservations-box">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title text-center">
                                        Sign Up
                                    </h2>
                                </div>
                                {/* <h4 class="form-title">BOOKING FORM</h4> */}
                                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

                                
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstName" placeholder="First Name" required="required" data-error="First Name is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastName" placeholder="Last Name" required="required" data-error="Last Name is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="E-Mail ID"  />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"
                                             id="password" placeholder="Password" required="required" data-error="Password id is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="tel" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} name="phone" id="phone" placeholder="Contact No." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <select name="gender" id="gender">
                                                <option selected disabled>Gender</option>
                                                <option value="male" onChange={(e) => setGender(e.target.value)}>Male</option>
                                                <option value="female" onChange={(e) => setGender(e.target.value)}>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} name="dob" id="date" placeholder="Date of Birth" required="required" data-error="Date of Birth is required." />
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="reserve-book-btn text-center">
                                            <button onClick={signUp} class="hvr-underline-from-center" type="submit" id="submit">SIGN UP </button>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;