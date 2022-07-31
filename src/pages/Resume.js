import React from "react";
import ContentBox from "../components/contentBox/ContentBox";
import Button from '@mui/material/Button';
import ResumePicture from "../../public/img/ResumePicture.jpg"
import ResumeFile from "../../public/documents/GavinYahnaResume.pdf"
import "./Resume.css"

const Resume = () => {
	return (
		<div className="resume-page">
			<ContentBox>
				<div className="resume-container">
					<img src={ResumePicture} className="resume-picture"/>
					{/* <a href={"../../public/documents/GavinYahnaResume.pdf"} download="GavinYahnaResume.pdf">
						<Button className="btn" variant= "contained">Download Resume</Button>
					</a> */}
				</div>
			</ContentBox>
		</div>
	);
};

export default Resume;
