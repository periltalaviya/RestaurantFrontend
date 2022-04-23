import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';

export default function Menu() {

    const [APIData, setAPIData] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [selectMenu, setSelectMenu] = useState("");

    //get data
    const [menu, setMenu] = useState([]);
  
    useEffect(() => {
        //get data
        axios.get(`https://onlinerestaurantbackend.herokuapp.com/menu/get`)
        .then((response) => {
            // console.log("r ", response.data.data);
            setMenu(response.data.data);
        })

        axios.get(`https://onlinerestaurantbackend.herokuapp.com/food/get`)
            .then((response) => {
               // console.log("r ", response.data.data);
                setAPIData(response.data.data);
            })
    }, [])

    return (
        <>
            <Navbar />
            <div id="menu" class="menu-main pad-top-100 pad-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 class="block-title text-center">
                                    Our Menu
                                </h2>
                                <h2 class="block-title text-center">Variety of Menus available </h2>

                                <div class="center">
                                    <div class="form-box" >
                                        {/* <select style={{ textAlign: "center" }} name="gender" id="gender" value={selectMenu}
                                            onChange={(e) => setSelectMenu(e.currentTarget.value, console.log("d ", e.currentTarget.value))}>
                                            <option selected>Select Menu Category</option>
                                            <option value="625722f08c940ddf7e2e3920" >Indian</option>
                                            <option value="625a646f5da82f80c073fd5f" >Chinese</option>
                                        </select> */}
                                         <select value={selectMenu} onChange={(e) => setSelectMenu(e.target.value)}>
                                            <option selected >Select Menu</option>
                                            {
                                                menu.map(data =>

                                                    <option value={data._id} key={data.id} >{data.menu_name}</option>)
                                            }
                                        </select>
                                   
                                    </div>

                                </div>
                            </div>

                            <div class="">

                                {/* <select
                                    value={selectMonthFilter}
                                    onChange={(e) => setSelectMonthFilter(e.currentTarget.value,console.log("d ",e.currentTarget.value))}
                                >
                                    <option value="">---</option>
                                    <option value="625722f08c940ddf7e2e3920">Indian</option>
                                    <option value="625a646f5da82f80c073fd5f">Chinese</option>
                                    <option value="03">Mar</option>
                                    <option value="04">Apr</option>
                                    <option value="05">May</option>
                                    <option value="06">Jun</option>
                                    <option value="07">Jul</option>
                                    <option value="08">Aug</option>
                                    <option value="09">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select> */}

                                <div class="slider slider-single">
                                    {
                                        APIData.map(data => (
                                            data.menu_id._id === selectMenu ?
                                                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                                                    <div class="offer-item" key={data.id}>
                                                        <div>
                                                            <h3>{data.food_name}</h3>
                                                            <p>
                                                                {data.menu_id.menu_name} <br></br>
                                                                {data.description}
                                                            </p>
                                                        </div>
                                                        <span class="offer-price">&#8377;{data.price}</span>
                                                    </div>
                                                </div> :
                                                <div></div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}