import React from "react";
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('admin-info')) {
            //history.push("/")
            navigate("/")
        }
    }, [])

    async function signIn() {
        console.warn(email, password)
        let item = { email, password };
        console.log("d ", item);
        let result = await fetch("http://localhost:3100/user/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log("r ", result);
        localStorage.setItem("admin-info", JSON.stringify(result))
        // history.push("/");
        navigate("/admindashboard")
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
                                        Admin Sign In
                                    </h2>
                                </div>
                                {/* <h4 class="form-title">BOOKING FORM</h4> */}
                                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="E-Mail ID" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"
                                            id="password" placeholder="Password" required="required" data-error="Password id is required." />
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="reserve-book-btn text-center">
                                        <button onClick={signIn} class="hvr-underline-from-center" type="submit" id="submit">SIGN IN </button>
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

export default AdminLogin;