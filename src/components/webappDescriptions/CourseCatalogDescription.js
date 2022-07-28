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
                    While taking capstone software engineering at brandeis university one of the projects
                    for the class was to build a webapp that loads in all of the courses currently offered
                    at the university.
                </p>
                <p className="intro-text">
                    This webapp was built using ruby on rails and a mongo NoSQL database to load in the courses
                    from a pre-existing API. The front end was set up using bootstrap UI, and the site was hosted
                    and deployed using Heroku.
                </p>
                <h2>Technologies and Frameworks</h2>
                <p className="intro-text">
                    Frontend - Ruby and BootstrapUI <br/>
                    Backend - Ruby on Rails <br/>
                    DB - MongoDB <br/>
                    Hosting - Heroku
                </p>
            </div>
        </>
    );
}

export default CourseCatalogDescription;
