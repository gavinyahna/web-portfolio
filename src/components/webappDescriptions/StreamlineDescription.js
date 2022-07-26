import React from "react";
import StreamlineLogin from "../../../public/img/StreamlineLogin.png"

function StreamlineDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={StreamlineLogin} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Steamline</h2>
                <p className="intro-text">
                    Steamline
                </p>
            </div>
        </>
    );
}

export default StreamlineDescription;
