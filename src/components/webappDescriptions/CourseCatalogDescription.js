import React from "react";
import CourseCatalogList from "../../../public/img/CourseCatalogList.png"

function CourseCatalogDescription() {
    return (
        <>
            <div className="scroll left">
                <img src={CourseCatalogList} className="website-picture"/>
            </div>
            <div className="right webapp-description">
                <h2>About Course Catalog</h2>
                <p className="intro-text">
                    Sweetly Becca
                </p>
            </div>
        </>
    );
}

export default CourseCatalogDescription;
