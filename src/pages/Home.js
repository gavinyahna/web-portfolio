import React from "react";
import Button from '@mui/material/Button';
import PictureTabs from "../components/pictureTabs/PictureTabs"
import ContentBox from "../components/contentBox/ContentBox"
import portrait from "../../public/img/avatar.png"
import "./Home.css";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hide: false};
  }

  render() {
    if (!this.state.hide) {
    return (
      <div className="container">
        <ContentBox className="left">
          <img src={portrait} className="portrait"/>
            <p className="intro-text">I am a fullstack software engineer with 3 years of professional experience</p>
            <p className="intro-text">I have been developing software for 7 years working on webapps and video games</p>
            <p className="intro-text">
              Check out my projects from the links in the navbar or 
              <Button className="home-btn" variant= "contained" onClick={() =>this.setState({hide: true})}>
                Enjoy the view
              </Button>
            </p>
        </ContentBox>
        <ContentBox className="right">
          <p className="intro-text">Here are a few things I am passionate about</p>
          <PictureTabs/>
        </ContentBox>
      </div>
    );
    } else {
      return (
        <div className="container">
          <Button className="white-home-btn" variant= "contained" onClick={() =>this.setState({hide: false})}>
            About Me
          </Button>
        </div>
        
      );
    }
  }
}

export default Home;
