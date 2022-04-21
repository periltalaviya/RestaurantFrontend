import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'

export default class Contactus extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div id="footer" class="footer-main">
                    <div class="footer-news pad-top-100 pad-bottom-70 parallax">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <h2 class="ft-title color-white text-center"> Contact Us </h2>
                                        <h2 class="ft-title color-white text-center"> Get in touch with us </h2>
                                    </div>
                                    <form action="https://formspree.io/f/xoqrkprp" method="post">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-box">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-box">
                                                <input type="email" name="email" placeholder="E-Mail ID" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-box">
                                                <textarea name="comments" placeholder="Comments" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="reserve-book-btn text-center">
                                                <button class="hvr-underline-from-center" type="submit" id="submit">SUBMIT</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </>
        )
    }
}