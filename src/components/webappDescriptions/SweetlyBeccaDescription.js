import React from "react";
import SweetlyBeccaHome from "../../../public/img/SweetlyBeccaHome.png"

function SweetlyBeccaDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={SweetlyBeccaHome} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Sweetly Becca</h2>
                <p className="intro-text">
                    Sweetly Becca
                </p>
            </div>
        </>
    );
}

export default SweetlyBeccaDescription;
