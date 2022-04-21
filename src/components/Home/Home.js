import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="banner" class="banner full-screen-mode parallax">
                <div class="container pr">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="banner-static">
                            <div class="banner-text">
                                <div class="banner-cell">
                                    <h1>Dinner with us  <span class="typer" id="some-id" data-delay="200" data-delim=":" data-words="Friends:Family:Officemates" data-colors="red"></span><span class="cursor" data-cursorDisplay="_" data-owner="some-id"></span></h1>
                                    <h2>Accidental appearances </h2>
                                    <h2>“Ate, eating, going to eat” that’s what you must care about.</h2>
                                    <div class="book-btn">
                                        {/* <a class="table-btn hvr-underline-from-center"> */}
                                            <Link to="/reservation">Book My Table</Link>
                                        {/* </a> */}
                                    </div>
                                    
                                        <Link to="/aboutus"><div class="mouse"></div></Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;