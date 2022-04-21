import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminAddMenu() {
    const [menuName, setMenuName] = useState('')

    const postData = () => {
        const payload = {
            menu_name: menuName,
        }
        axios({
            method: 'post',
            url: 'https://onlinerestaurantbackend.herokuapp.com/menu/add',
            data: payload // you are sending body instead

        })
        // console.log(menuName);
    }

    return (
        <>
            <AdminNavbar />
            <div id="reservation"  class="reservations-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="form-reservations-box">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title text-center">
                                        Add Menu
                                    </h2>
                                </div>
                                <h4 class="form-title">BOOKING FORM</h4>
                                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

                                {/* <form id="contact-form" class="reservations-box"> */}
                                <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <input type="text" onChange={(e) => setMenuName(e.target.value)} name="dob" id="date" placeholder="Menu name" required="required" data-error="Booking date is required." />
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="reserve-book-btn text-center">
                                        <button onClick={postData} class="hvr-underline-from-center" type="submit" value="SEND" id="submit">ADD MENU </button>
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
