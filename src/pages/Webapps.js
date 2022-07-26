import React from "react";
import ContentBox from "../components/contentBox/ContentBox"
import IntraleaguesDescription from "../components/webappDescriptions/IntraleaguesDescription"
import SweetlyBeccaDescription from "../components/webappDescriptions/SweetlyBeccaDescription"
import StreamlineDescription from "../components/webappDescriptions/StreamLineDescription"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Webapps.css"

const Webapps = () => {
	return (
		<div classname="webapps-container">
			<ContentBox>
				<Accordion className="accordion">
					<AccordionSummary className="accordion-text" expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h1 className="accordion-text">Intraleagues</h1>
						<h3 className>- collegiate intramural video game league</h3>
					</AccordionSummary>
					<AccordionDetails>
						<IntraleaguesDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary className="accordion-text" expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h1 className="accordion-text">Sweetly Becca</h1>
						<h3 className>- website for a friends baking company</h3>
					</AccordionSummary>
					<AccordionDetails>
						<SweetlyBeccaDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary className="accordion-text" expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h1 className="accordion-text">Streamline</h1>
						<h3 className>- note taking webapp with google calendar integration</h3>
					</AccordionSummary>
					<AccordionDetails>
						<StreamlineDescription/>
					</AccordionDetails>
				</Accordion>
			</ContentBox>
		</div>
	);
};

export default Webapps;
