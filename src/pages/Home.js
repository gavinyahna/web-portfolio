import React from "react";
import PictureTabs from "../components/pictureTabs/PictureTabs"
import ContentBox from "../components/contentBox/ContentBox"
import portrait from "../../public/img/avatar.png"
import "./Home.css";

const Home = () => {
  
  return (
    <div className="container">
      <ContentBox className="left">
        <img src={portrait} className="portrait"/>
          <p className="intro-text">I am a fullstack software engineer with 3 years of professional experience working for UKG (Ultimate Kronos Group)</p>
          <p className="intro-text">I have been developing software for 8 years mostly working on websites, webapps, and video games.</p>
      </ContentBox>
      <ContentBox className="right">
        <p className="intro-text">Here are a few things I am passionate about</p>
        <PictureTabs/>
      </ContentBox>
    </div>
  );
};

export default Home;
