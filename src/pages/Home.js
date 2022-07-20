import React from "react";
import PictureTabs from "../components/pictureTabs/PictureTabs"
import portrait from "../../public/img/avatar.png"
import "./Home.css";

const Home = () => {
  
  return (
    <>
      <div className="container">
        <div className="box left">
          <img src={portrait} className="picture"/>
            <p className="intro-text">I am a fullstack software engineer with 3 years of professional experience working for UKG (Ultimate Kronos Group)</p>
            <p className="intro-text">I have been developing software for 8 years now mostly working on websites, webapps, and video games.</p>
        </div>
        <div className="box right">
          <p className="intro-text">Here are a few things I am passionate about</p>
          <PictureTabs/>
        </div>
      </div>
    </>
  );
};

export default Home;
