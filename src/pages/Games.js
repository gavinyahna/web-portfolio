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
                <p className="intro-text">
                    Icy Boi was the first game I completed, it is a 2d platformer with wall climbing
                    movement mechanics and a snowball projectile that can be used to shoot enemies
                </p>
                <p className="intro-text">
                    Icy Boi can be downloaded from my Itch.io account if you want to try it out:
                    <a href="https://sp4ceboy.itch.io/icy-boi" target="_blank" rel="noreferrer">
					    <Button className="btn" variant= "contained">Download Game</Button>
				    </a>
                </p>
                
                <h3>Engine and Frameworks</h3>
                <p className="intro-text">
                    Unity Engine <br/>
                    Coded in C# .net Frameworks <br/>
                    Visuals created in Adobe Photoshop
                </p>
                <YoutubePlayer url="https://youtu.be/hnb9tdxjDv4?t=3" />
			</ContentBox>
            <ContentBox className="right">
                <h2>Particle Shooter</h2>
                <p className="intro-text">
                    Particle shooter is still a work in progress, the main gameplay mechanic
                    is a terraforming rifle which shoots particles of different elements that
                    effect the environment in the following ways: <br/>
                    Ice: Allows player to move faster on a surface however they are not able to
                    climb slopes with a 15% grade or steeper <br/>
                    Grass: Player is able to climb surfaces up to a 45% grade however they are
                    no longer able to run and have an additional movement speed penalty <br/>
                    Fire: Resets both Ice and Grass blocks back to rock which has normal movement
                    speed and a max climbing grade of 30%<br/>
                    Energy: Deals damage to enemies<br/>
                </p>
                <h3>Engine and Frameworks</h3>
                <p className="intro-text">
                    Unreal Engine 5 <br/>
                    Coded in C++
                </p>
                <YoutubePlayer url="https://www.youtube.com/watch?v=kqYobvNOIf0" />
            </ContentBox>
        </div>
    );
};

export default Games;
