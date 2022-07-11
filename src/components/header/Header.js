import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to ="">
                <h1>Gavin Yahna's Portfolio</h1>
            </Link>
            <div class="navbar">
                <Link to="resume">
                    <h2>Resume</h2>
                </Link>
                <Link to="webapps">
                    <h2>WebApps</h2>
                </Link>
                <Link to="games">
                    <h2>Games</h2>
                </Link>
            </div>
        </div>
    );
}

export default Header;