import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminViewBookings() {
    const [APIData, setAPIData] = useState([]);
    const [status, setStatus] = useState('')
    const [buttonDisable, setButtonDisable] = useState(false)

    useEffect(() => {
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/book-table/get`)
            .then((response) => {
                console.log("r ", response.data.data);
                setAPIData(response.data.data);
            })
    }, [])


    function postData(id) {
        const payload = {
            _id: id,
            status_id: '6256dcb8f9fcf95c6c4974b3'
        }
        axios({
            method: 'put',
            url: 'https://onlinerestaurantbackend.herokuapp.com/book-table/update/' + id,
            data: payload // you are sending body instead
        })
        console.log("p ", payload);
        setButtonDisable(true)
    }

    // const postData = (props) => {
    //     const payload = {
    //         _id: props._id,
    //         status_id: '6260090e43eceb38b233f189'
    //     }
    //     console.log("p ", payload);
    //     // axios({
    //     //     method: 'put',
    //     //     url: 'https://onlinerestaurantbackend.herokuapp.com/book-table/update/',
    //     //     data: payload // you are sending body instead
    //     // })
    // }
    return (
        <>
            <AdminNavbar />
            <div id="menu" class="menu-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 class="block-title text-center">
                                    View Bookings
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <table>
                    <thead>
                        <th>Booking ID</th>
                        <th>Booking Date</th>
                        <th>Booking Time</th>
                        <th>Approx Arrive Time</th>
                        <th>No. of Persons</th>
                        <th>Comments</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {

                            APIData.map(data =>
                                <tr >
                                    <td>{data._id}</td>
                                    <td>{data.booking_date}</td>
                                    <td>{data.booking_time}</td>
                                    <td>{data.approx_arrive_time}</td>
                                    <td>{data.no_of_persons}</td>
                                    <td>{data.comments}</td>
                                    <td><button style={{ backgroundColor: "#e75b1e", color: "#fff", border: "none" }} disabled={buttonDisable} onClick={() => postData(data._id)} type="submit">{data.status_id?.status_name}</button></td>
                                    {/* <td>{data.status_id.map(s =>
                                    <td>{s.status_name}</td>)
                                }</td> */}
                                </tr>
                            )
                        }
                    </tbody >
                </table >
            </div >
        </>
    )
}
