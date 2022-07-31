import React from "react";
import "./ContentBox.css";

const ContentBox = ({children}) => {
    return (
        <div className="content-box">
            {children}
        </div>
    );
}

export default ContentBox;