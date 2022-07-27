import React from "react";
import ContentBox from "../components/contentBox/ContentBox"
import IntraleaguesDescription from "../components/webappDescriptions/IntraleaguesDescription"
import SweetlyBeccaDescription from "../components/webappDescriptions/SweetlyBeccaDescription"
import StreamlineDescription from "../components/webappDescriptions/StreamLineDescription"
import CourseCatalogDescription from "../components/webappDescriptions/CourseCatalogDescription"
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
						<h3 className>- Collegiate intramural video game league built with vue.js and node.js</h3>
					</AccordionSummary>
					<AccordionDetails>
						<IntraleaguesDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary className="accordion-text" expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h1 className="accordion-text">Sweetly Becca</h1>
						<h3 className>- Website for a friends baking company built with react.js and node.js</h3>
					</AccordionSummary>
					<AccordionDetails>
						<SweetlyBeccaDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary className="accordion-text" expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h1 className="accordion-text">Streamline</h1>
						<h3 className>- Note taking webapp with google calendar integration built with ruby on rails</h3>
					</AccordionSummary>
					<AccordionDetails>
						<StreamlineDescription/>
					</AccordionDetails>
				</Accordion>
				<Accordion className="accordion">
					<AccordionSummary className="accordion-text" expandIcon={<ExpandMoreIcon className="accordion" />}>
						<h1 className="accordion-text">Course Catalog</h1>
						<h3 className>- Catalog of avaliable courses at Brandeis University built with ruby on rails</h3>
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
