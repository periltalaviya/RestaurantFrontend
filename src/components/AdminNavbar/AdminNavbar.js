import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    let admin = JSON.parse(localStorage.getItem('admin-info'))
    function logOut() {
        localStorage.clear();
        navigate('/adminlogin')
    }

    return (
        <>
            <nav>
                <div id="logo"><Link to="/admindashboard"> <img src="images/logo.png" style={{ paddingBottom: "2px" }} height={"50px"} alt="" /></Link></div>
                <label for="drop" class="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                <ul class="menu">
                    <li><Link to="/aboutus"></Link></li>
                    <li>

                        <label for="drop-1" class="toggle">Menu +</label>
                        <a href="#">Menu</a>
                        <input type="checkbox" id="drop-1" />
                        <ul>
                            <li><a><Link to="/adminaddmenu">Add Menu</Link></a></li>
                            <li><a><Link to="/adminviewmenu">View Menu</Link></a></li>
                        </ul>
                    </li>
                    <li>

                        <label for="drop-1" class="toggle">Food +</label>
                        <a href="#">Food</a>
                        <input type="checkbox" id="drop-1" />
                        <ul>
                            <li><a><Link to="/adminaddfood">Add Food</Link></a></li>
                            <li><a><Link to="/adminviewfood">View Food</Link></a></li>
                        </ul>
                    </li>

                    <li><Link to="/adminviewbookings">View Bookings</Link></li>
                    {
                        localStorage.getItem('admin-info') ?
                            <>
                                <li><Link to="/" onClick={logOut}>Sign out</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/signin">Sign in</Link></li>
                            </>
                    }
                </ul>
            </nav>

        </>
    );
}

export default Navbar;