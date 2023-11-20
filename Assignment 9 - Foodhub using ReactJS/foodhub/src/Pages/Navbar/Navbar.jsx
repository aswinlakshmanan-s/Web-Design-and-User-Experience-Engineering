import React from 'react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar({ title }) {

const navigate = useNavigate();

    return (
        <div>
            <nav className="nav-desk">
                <center>
                    <div className="nav-logo">
                        <a><img onClick={() => navigate('/home')} style={{width: "7%", height: "7%", float: "left", cursor: "pointer"}} id="logo" src="images/letter-g.png" /></a>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li><span><a onClick={() => navigate('/home')}
                                className={title == "home" ? "strikeOff" : null}>Home</a></span></li>
                            <li><span><a onClick={() => navigate('/about')} className={title == "about" ? "strikeOff" : null}>About Us</a></span></li>
                            <li><span><a onClick={() => navigate('/jobs')} className={title == "jobs" ? "strikeOff" : null}>Jobs</a></span></li>
                            <li><span><a onClick={() => navigate('/contact')} className={title == "contact" ? "strikeOff" : null}>Contact Us</a></span></li>
                        </ul>
                    </div>
                </center>
            </nav>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><a onClick={() => navigate('/home')} className={title == "home" ? "strikeOff" : null}>Home</a></li>
                                <li><a onClick={() => navigate('/about')} className={title == "about" ? "strikeOff" : null}>About Us</a></li>
                                <li><a onClick={() => navigate('/jobs')} className={title == "jobs" ? "strikeOff" : null}>Jobs</a></li>
                                <li><a onClick={() => navigate('/contact')} className={title == "contact" ? "strikeOff" : null}>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar