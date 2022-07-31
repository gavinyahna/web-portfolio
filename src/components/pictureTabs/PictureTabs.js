import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import dogPicture from "../../../public/img/WallyCar.jpg";
import skiPicture from "../../../public/img/SkiingPicture.jpg";
import familyPicture from "../../../public/img/FamilyHiking.jpg"

import "./PictureTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function PictureTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className="picture-box">
      <AppBar className="app-bar" position="static">
        <Tabs 
          className="tabs"
          value={value}
          onChange={handleChange}
          textColor="inherit"
          centered
        >
          <Tab className="tab" label="Skiing" {...a11yProps(0)} />
          <Tab className="tab" label="Family" {...a11yProps(1)} />
          <Tab className="tab" label="My Dog" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews className="view"
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <img src={skiPicture} className="picture"/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <img src={familyPicture} className="picture"/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <img src={dogPicture} className="picture"/>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default PictureTabs;