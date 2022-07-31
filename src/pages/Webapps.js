import React from "react";
import ContentBox from "../components/contentBox/ContentBox"
import IntraleaguesDescription from "../components/webappDescriptions/IntraleaguesDescription"
import SweetlyBeccaDescription from "../components/webappDescriptions/SweetlyBeccaDescription"
import StreamlineDescription from "../components/webappDescriptions/StreamlineDescription"
import CourseCatalogDescription from "../components/webappDescriptions/CourseCatalogDescription"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Webapps.css"

const Webapps = () => {
	return (
		<div className="webapps-container">
			<ContentBox>
				<Accordion className="accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h2 className="accordion-text">Intraleagues</h2>
						<p className="accordion-text-small">- Collegiate intramural video game league</p>
					</AccordionSummary>
					<AccordionDetails>
						<IntraleaguesDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h2 className="accordion-text">Sweetly Becca -</h2>
						<p className="accordion-text-small">Website for a friends baking company</p>
					</AccordionSummary>
					<AccordionDetails>
						<SweetlyBeccaDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h2 className="accordion-text">Streamline - </h2>
						<p className="accordion-text-small">Note taking webapp with google calendar integration</p>
					</AccordionSummary>
					<AccordionDetails>
						<StreamlineDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h2 className="accordion-text">Course Catalog -</h2>
						<p className="accordion-text-small">Catalog of avaliable courses at Brandeis University</p>
					</AccordionSummary>
					<AccordionDetails>
						<CourseCatalogDescription/>
					</AccordionDetails>
				</Accordion>
			</ContentBox>
		</div>
	);
};

export default Webapps;
