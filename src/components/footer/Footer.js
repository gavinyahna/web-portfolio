import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <b>gavinyahna@gmail.com</b>
            <b>|</b>
            <a href="https://github.com/gavinyahna" target="_blank" rel="noreferrer">
                <b>github.com/gavinyahna</b>
            </a>
           
        </div>
    );
}

export default Footer;