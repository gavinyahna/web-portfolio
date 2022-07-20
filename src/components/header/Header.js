import React from "react";
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link className="name" to ="">
                <AcUnitIcon className="name-icon"/>
                <b>Gavin Yahna</b>
                <AcUnitIcon className="name-icon"/>
            </Link>
            <div className="button-container">
                <Link to="resume">
                    <Button className="btn" variant= "contained">Resume</Button>
                </Link>
                
                <Link to="webapps">
                    <Button className="btn" variant= "contained">WebApps</Button>
                </Link>
                <Link to="games">
                    <Button className="btn" variant= "contained">Games</Button>
                </Link>
            </div>
        </div>
    );
}

export default Header;