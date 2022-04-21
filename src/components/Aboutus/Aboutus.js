import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'

export default class Aboutus extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div style={{marginTop:"-0.001%"}} id="about" class="about-main pad-top-100 pad-bottom-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 class="block-title"> About Us </h2>
                                    <h3>Welcome to Online Table Reservation with Pre-Ordering!!</h3>
                                    <p> We provide table reservation service along with ordering the food which is called pre-order. </p>
                                    <p>Now a days people ususally going to restaurants. Especially in holidays and on festivals people face
                                        too much
                                        traffic in restaurants. We usually see that people
                                        stay in queue for getting foods for very long time and sometimes happen that even if standing in
                                        waiting list still don't get food order in restaurants and they need
                                        to find any other restaurants due to heavy traffic.</p>
                                    <p>Here, The customer will not face the problem i.e the waiting time will be reduced so that their table and food are ready when they arrive.
                                        And the food will be freshly served immediately by the time the customer reaches the restaurant.
                                    </p>

                                    <p> With the Online Table Reservation with Pre-Ordering system the waiting time between the
                                        occupancy of the table and food serving is reduced.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <div class="about-images">
                                        <img class="about-main" src="images/about-main.jpg" alt="About Main Image" />
                                        <img class="about-inset" src="images/about-inset.jpg" alt="About Inset Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}