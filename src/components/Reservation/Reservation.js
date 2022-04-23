import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";

export default function Reservaion() {

    const [bookingDate, setBookingDate] = useState('')
    const [bookingTime, setBookingTime] = useState('')
    const [approxAriveTime, setApproxArriveTime] = useState('')
    const [noOfPersons, setNoOfPersons] = useState('')
    const [comments, setComments] = useState('')
    //const [statusId, setStatusId] = useState('')
    let data = JSON.parse(localStorage.getItem('user-info'));
    // console.log("c ", data._id);


    const postData = () => {
        // axios.post(`https://onlinerestaurantbackend.herokuapp.com/menu/add`, {
        //     menuName
        // })
        const payload = {
            booking_date: bookingDate,
            booking_time: bookingTime,
            approx_arrive_time: approxAriveTime,
            no_of_persons: noOfPersons,
            comments: comments,
            user_id: data._id,
            status_id: '6260090e43eceb38b233f189'
        }
        axios({
            method: 'post',
            url: 'https://onlinerestaurantbackend.herokuapp.com/book-table/add',
            data: payload // you are sending body instead

        })
        // console.log(menuName);
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
                                        Reservations
                                    </h2>
                                </div>
                                <h4 class="form-title">BOOKING FORM</h4>
                                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

                                {/* <form id="contact-form" class="reservations-box"> */}
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="date" onChange={(e) => setBookingDate(e.target.value)} name="dob" id="date" placeholder="Booking Date" required="required" data-error="Booking date is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="time" onChange={(e) => setBookingTime(e.target.value)} name="dob" id="date" placeholder="Booking Time" required="required" data-error="Booking time is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="time" onChange={(e) => setApproxArriveTime(e.target.value)} name="dob" id="date" placeholder="Approx Arrival Time" required="required" data-error="Approx Arrival Time is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-box">
                                            <input type="number" onChange={(e) => setNoOfPersons(e.target.value)} name="dob" id="date" placeholder="No. of Person" required="required" data-error="No. of Person is required." />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-box">
                                            <textarea onChange={(e) => setComments(e.target.value)} name="comments" placeholder="Comments" />
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="reserve-book-btn text-center">
                                            <button onClick={postData} class="hvr-underline-from-center" type="submit" value="SEND" id="submit">BOOK MY TABLE </button>
                                        </div>
                                    </div>
                                {/* </form> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
