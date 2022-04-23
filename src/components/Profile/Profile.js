import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

    let data = JSON.parse(localStorage.getItem('user-info'));
    // console.log("c ", data._id);

    const [user, setUser] = useState([]);
    //    setUser(data.user)

    //  console.log("d ", user.user);

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneno, setPhoneno] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")


    useEffect(() => {
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/user/getById/` + data._id)
            .then((response) => {
                // console.log("r ", response.data);
                setUser(response.data);
            })
    }, [])


    const postData = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneno: phoneno,
            gender: gender,
            dob: dob
        }
        axios({
            method: 'put',
            url: 'https://onlinerestaurantbackend.herokuapp.com/user/update/' + data._id,
            data: user // you are sending body instead
        })
        // console.log("p ", payload);
        navigate('/')
    }

    return (
        <>
            <Navbar />
            <div id="reservation" class="reservations-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="form-reservations-box">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title text-center">
                                        Profile
                                    </h2>
                                </div>
                                {/* <h4 class="form-title">BOOKING FORM</h4> */}
                                {/* <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p> */}

                                {/* <form id="contact-form" class="reservations-box"> */}
                                <div style={{ marginTop: "5%" }}>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="text" value={user.firstName} onChange={(e) => { setUser({ firstName: e.target.value }) }} placeholder="First Name" required="required" data-error="Booking date is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="text" value={user.lastName} onChange={(e) => { setUser({ lastName: e.target.value }) }} name="dob" id="date" placeholder="Last Name" required="required" data-error="Booking time is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="email" value={user.email} onChange={(e) => setUser({ email: e.target.value })} name="dob" id="date" placeholder="Email" required="required" data-error="Approx Arrival Time is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="number" value={user.phoneno} onChange={(e) => setUser({ phoneno: e.target.value })} name="dob" id="date" placeholder="Phone no" required="required" data-error="No. of Person is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <select name="gender" value={user.gender} id="gender" onChange={(e) => setUser({ gender: e.target.value })}>
                                                <option selected disabled>Gender</option>
                                                <option value="male" >Male</option>
                                                <option value="female" >Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="date" value={user.dob} onChange={(e) => setUser({ dob: e.target.value })} name="dob" id="date" placeholder="Phone no" required="required" data-error="No. of Person is required." />
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="reserve-book-btn text-center">
                                            <button onClick={postData} class="hvr-underline-from-center" type="submit" value="SEND" id="submit">EDIT PROFILE </button>
                                        </div>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
