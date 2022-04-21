import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminViewMenu() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3100/menu/get`)
            .then((response) => {
                console.log("r ", response.data.data);
                setAPIData(response.data.data);
            })
    }, [])

    // console.log("a ", APIData[0].status_id.status_name);
    return (
        <div>
            <AdminNavbar />
            <div id="menu" class="menu-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 class="block-title text-center">
                                    View Menu
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <table>
                    <thead>
                        <th>Menu ID</th>
                        <th>Menu Name</th>
                    </thead>
                    <tbody>
                        {
                            APIData.map(data =>
                                <tr key={data.id}>
                                    <td>{data._id}</td>
                                    <td>{data.menu_name}</td>
                                </tr>
                            )
                        }
                    </tbody >
                </table >
            </div >
        </div >
    )
}

