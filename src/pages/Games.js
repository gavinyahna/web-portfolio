import React from "react";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import ContentBox from "../components/contentBox/ContentBox";
import YoutubePlayer from "../components/youtubePlayer/YoutubePlayer";

const Games = () => {
    return (
        <div className="container">
            <ContentBox className="left">
                <h2>Icy Boi</h2>
                <YoutubePlayer url="https://youtu.be/hnb9tdxjDv4?t=3" />
                <a href="https://sp4ceboy.itch.io/icy-boi" target="_blank" rel="noreferrer">
					<Button className="btn" variant= "contained">Download Game Here</Button>
				</a>
			</ContentBox>
            <ContentBox className="right">
                <h2>Particle Shooter</h2>
                <YoutubePlayer url="https://www.youtube.com/watch?v=kqYobvNOIf0" />
            </ContentBox>
        </div>
    );
};

export default Games;
