import React from "react";
import ContentBox from "../components/contentBox/ContentBox";
import Button from '@mui/material/Button';
import ResumePicture from "../../public/img/ResumePicture.png"
import ResumeFile from "../../public/documents/GavinYahnaResume.pdf"
import "./Resume.css"

const Resume = () => {
	return (
		<div classname="resume-page">
			<ContentBox>
				<div className="resume-container">
					<img src={ResumePicture} className="resume-picture"/>
					<a href={"https://docs.google.com/document/d/1DO5wQNl0K7_1_SDlFS3lYER-mCyC1r_lW4lv06imkYk"} download="GavinYahnaResume.pdf">
						<Button className="btn" variant= "contained">Download Resume</Button>
					</a>
				</div>
			</ContentBox>
		</div>
	);
};

export default Resume;
