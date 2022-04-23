import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminAddFood() {
    const [foodName, setFoodName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [menuId, setMenuId] = useState('')
    const [statusId, setStatusId] = useState('')

    //get data
    const [menu, setMenu] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/menu/get`)
            .then((response) => {
                console.log("r ", response.data.data);
                setMenu(response.data.data);
            })

        axios.get(`https://onlinerestaurantbackend.herokuapp.com/status/get`)
            .then((response) => {
                console.log("r ", response.data);
                setStatus(response.data);
            })
    }, [])



    const postData = () => {
        const payload = {
            food_name: foodName,
            price: price,
            description: description,
            menu_id: menuId,
            status_id: statusId
        }
        axios({
            method: 'post',
            url: 'https://onlinerestaurantbackend.herokuapp.com/food/add',
            data: payload // you are sending body instead

        })
        console.log("s ", statusId);
    }

    return (
        <>
            <AdminNavbar/>
            <div id="reservation" class="reservations-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="form-reservations-box">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title text-center">
                                        Add Food
                                    </h2>
                                </div>

                                {/* <form id="contact-form" class="reservations-box"> */}
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <input type="text" onChange={(e) => setFoodName(e.target.value)} name="dob" id="date" placeholder="Menu name" required="required" data-error="Booking date is required." />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <input type="number" onChange={(e) => setPrice(e.target.value)} name="dob" id="date" placeholder="Price" required="required" data-error="Booking date is required." />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <select value={menuId} onChange={(e) => setMenuId(e.target.value)} name="gender" id="gender">
                                            <option selected >Select Menu</option>
                                            {
                                                menu.map(data =>

                                                    <option value={data._id} key={data.id} >{data.menu_name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="form-box">
                                        <select value={statusId} onChange={(e) => setStatusId(e.target.value)} name="gender" id="gender">
                                            <option selected >Select Status</option>

                                            {
                                                status.map(data =>

                                                    <option value={data._id} key={data.id} >{data.status_name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-box">
                                        <textarea onChange={(e) => setDescription(e.target.value)} name="comments" placeholder="Description" />
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
