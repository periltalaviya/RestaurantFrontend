import React, { useState, useEffect } from 'react';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import axios from 'axios';

export default function AdminDashboard() {
    const [foodData, setFoodData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        //food data
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/food/get`)
            .then((response) => {
                // console.log("f ", response.data.data);
                setFoodData(response.data.data.length);
            })

        //user data
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/user/get`)
            .then((response) => {
                // console.log("u ", response.data);
                setUserData(response.data.length);
            })

        //menu data
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/menu/get`)
            .then((response) => {
                // console.log("r ", response.data.data);
                setMenuData(response.data.data.length);
            })

        //booking data
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/book-table/get`)
            .then((response) => {
                // console.log("r ", response.data.data);
                setBookingData(response.data.data.length);
            })
    }, [])

    // console.log("a ", foodData);

    return (
        <>
            <AdminNavbar />
            <div id="menu" class="menu-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 class="block-title text-center">
                                    Admin Dashboard
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="center" style={{ width: "80%" }}>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="panel" style={{ backgroundColor: "#e75b1e", color: "#fff" }}>
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-solid fa-users fa-5x"></i>
                                        {/* <i class="fa fa-file-text fa-4x"></i> */}
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>{userData}</div>
                                        <div class="under-number">Users</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="panel panel-green">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-cutlery fa-5x"></i>
                                        {/* <i class="fa fa-comments fa-4x"></i> */}
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>{menuData}</div>
                                        <div class="under-number">Menu</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="panel panel-yellow">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-coffee fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>{foodData}</div>
                                        <div class="under-number"> Food</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="panel panel-red">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-calendar-check-o fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class='huge'>{bookingData}</div>
                                        <div class="under-number">Bookings</div>
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
