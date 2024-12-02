import Notif from "../../../../assets/icons/Notif.svg";
import Avatar from "../../../../assets/icons/Avatar.svg";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  

function Results() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <main>
      <div className="flex flex-row justify-between items-center mb-20">
        <h1 className="font-semibold text-lg text-gray-800">
          Formulaire 1: Evaluation de la qualité du produit
        </h1>
        <div className="flex flex-row items-center gap-4">
          <img src={Notif} alt="Notification" className="h-5 w-5" />
          <div className="flex flex-row items-center gap-2">
            <img src={Avatar} alt="Avatar" className="h-3 w-3" />
            <span className="text-gray-600">Richard</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Tableau" />
          <Tab label="Rapport" />
          <Tab label="Média" />
          <Tab label="Carte" />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}></CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <span>ID</span>
                    <span>123</span>
                </div>
                <div className="flex justify-center">
                    
                </div>
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}></CustomTabPanel>
      <CustomTabPanel value={value} index={3}></CustomTabPanel>
    </main>
  );
}

export default Results;
