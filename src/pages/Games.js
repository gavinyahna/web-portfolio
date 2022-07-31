import React from "react";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import ContentBox from "../components/contentBox/ContentBox";
import YoutubePlayer from "../components/youtubePlayer/YoutubePlayer";
import "./Games.css";

const Games = () => {
    return (
        <div className="container">
            <div className="game-box">
                <ContentBox className="left">
                    <h2>Icy Boi</h2>
                    <p className="games-text">
                        Icy Boi was the first game I completed, it is a 2d platformer with wall climbing
                        movement mechanics and a snowball projectile that can be used to shoot enemies
                    </p>
                    <p className="games-text">
                        Icy Boi can be downloaded from my Itch.io account if you want to try it out:
                    </p>
                    <a href="https://sp4ceboy.itch.io/icy-boi" target="_blank" rel="noreferrer">
                        <Button className="btn" variant= "contained">Download Game</Button>
                    </a>
                    
                    <h3 className="games-text">Engine and Frameworks</h3>
                    <p className="games-text">
                        Unity Engine <br/>
                        Coded in C# <br/>
                        Visuals created in Adobe Photoshop
                    </p>
                    <h3 className="games-text">Demo</h3>
                    <div className="game-video">
                        <YoutubePlayer url="https://youtu.be/hnb9tdxjDv4?t=3" />
                    </div>
                </ContentBox>
            </div>
            <div className="game-box">
                <ContentBox className="right">
                    <h2>Particle Shooter</h2>
                    <p className="games-text">
                        Particle shooter is still a work in progress, the main gameplay mechanic
                        is a terraforming rifle which shoots particles of different elements that
                        effect the environment in the following ways:
                    </p>
                    <p className="blue text">
                        Ice: Allows player to move faster on a surface however they are not able to
                        climb slopes with a 15% grade or steeper
                    </p>
                    <p className="green text">
                        Grass: Player is able to climb surfaces up to a 45% grade however they are
                        no longer able to run and have an additional movement speed penalty
                    </p>
                    <p className="red text">
                        Fire: Resets both Ice and Grass blocks back to rock which has normal movement
                        speed and a max climbing grade of 30%
                    </p>
                    <p className="yellow text">
                        Energy: Deals damage to enemies
                    </p>
                    <h3 className="games-text">Engine and Frameworks</h3>
                    <p className="games-text">
                        Unreal Engine 5 <br/>
                        Coded in C++
                    </p>
                    <h3 className="games-text">Demo</h3>
                    <div className="game-video">
                        <YoutubePlayer url="https://www.youtube.com/watch?v=kqYobvNOIf0" /> 
                    </div>                    
                </ContentBox>
            </div>
        </div>
    );
};

export default Games;
