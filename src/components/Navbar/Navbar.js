import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useNavigate();
    function logOut() {
        localStorage.clear();
        history.push('/signin')
    }

    return (
        <>
            <nav>
                <div id="logo"><Link to="/"> <img src="images/logo.png" style={{ paddingBottom: "2px" }} height={"50px"} alt="" /></Link></div>
                <label for="drop" class="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                <ul class="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About us</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contactus">Contact us</Link></li>
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <li><Link to="/reservation">Reservaion</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/signup">Sign up</Link></li>
                                <li><Link to="/signin">Sign in</Link></li>
                            </>
                    }
                    
                    {
                        localStorage.getItem('user-info') ?
                            // <li> Profile
                            <>
                                {/* <li>

                                    <label for="drop-1" class="toggle">User +</label>
                                    <a href="#">Profile</a>
                                    <input type="checkbox" id="drop-1" />
                                    <ul> */}
                                <li><Link to="/profile">Edit Profile</Link></li>
                                <li><Link to="/" onClick={logOut}>Sign out</Link></li>
                                {/* </ul>
                                </li> */}
                                {/* <li><a><Link to="/view-profile">View Profile</Link></a></li> */}
                                {/* <li><a><Link to="/edit-profile">Edit Profile</Link></a></li> */}
                                {/* <li><a><Link to="/signin" onClick={logOut}>Sign out</Link></a></li> */}
                            </>
                            // </li>
                            : null
                    }

                </ul>
            </nav>

        </>
    );
}

export default Navbar;