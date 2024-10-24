import Notif from "../../../../assets/icons/Notif.svg";
import Avatar from "../../../../assets/icons/Avatar.svg";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import EditProject from "../../../../assets/icons/EditProject.svg";
import CreateFrom from "../../../../assets/icons/CreateForm.svg";
import ShareProject from "../../../../assets/icons/ShareProject.svg";
import Filter from "../../../../assets/icons/Filter.svg";
import IconeTableau from "../../../../assets/icons/IconeTableau.svg";
import FormCreateButton from "../../../../assets/icons/FormCreateButton.svg";
import IconSupprimer from "../../../../assets/icons/IconSupprimer.svg";
import IconModification from "../../../../assets/icons/IconModification.svg";
import IconeFermer from "../../../../assets/icons/IconeFermer.svg";
import IconeArchiver from "../../../../assets/icons/IconeArchiver.svg";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Nom du formulaire", width: 190 },
  { field: "lastUpdated", headerName: "Dernière modification", width: 210 },
  { field: "status", headerName: "Status", width: 170 },
  {
    field: "deploymentDate",
    headerName: "Date de déploiement",
    width: 210,
  },
  {
    field: "submissions",
    headerName: "Nombre de soumissions",
    width: 215,
  },
];

const submissionsColumns: GridColDef[] = [
  { field: "name", headerName: "Nom du formulaire", width: 190 },
  { field: "lastSubmitted", headerName: "Date du dernier envoi", width: 210 },
  { field: "status", headerName: "Status", width: 170 },
  {
    field: "submissions",
    headerName: "Soumissions reçues",
    width: 210,
  },
  {
    field: "target",
    headerName: "Nombre de soumissions",
    width: 215,
  },
  {field: "progress",
    headerName: "Progression (%)",
    width: 215,
  }
];

const submissionRows = [
  {
    id: "A",
    name: "Formulaire A",
    lastSubmitted: "10/09/2024",
    status: "Brouillon",
    submissions: 0,
    target: 100,
    progress: 0
  },
  {
    id: "B",
    name: "Formulaire B",
    lastSubmitted: "10/09/2024",
    status: "Brouillon",
    submissions: 0,
    target: 100,
    progress: 0
  },
  {
    id: "C",
    name: "Formulaire C",
    lastSubmitted: "10/09/2024",
    status: "Brouillon",
    submissions: 0,
    target: 100,
    progress: 0
  },
];

const rows = [
  {
    id: "A",
    name: "Formulaire A",
    lastUpdated: "10/09/2024",
    status: "Brouillon",
    deploymentDate: "02/09/2024",
    submissions: "0/100"
  },
  {
    id: "B",
    name: "Formulaire B",
    lastUpdated: "10/09/2024",
    status: "Brouillon",
    deploymentDate: "02/09/2024",
    submissions: "0/100"
  },
  {
    id: "C",
    name: "Formulaire C",
    lastUpdated: "10/09/2024",
    status: "Fermé",
    deploymentDate: "02/09/2024",
    submissions: "0/100"
  },
];


const paginationModel = { page: 0, pageSize: 5 };

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

const ProjectDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <main className="">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">Projet 01</h1>
        <div className="flex flex-row items-center gap-4">
          <img src={Notif} alt="Notification" className="h-5 w-5" />
          <div className="flex flex-row items-center gap-2">
            <img src={Avatar} alt="Avatar" className="h-3 w-3" />
            <span>Richard</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-24 mb-24">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Détails du Projet" />
          <Tab label="Formulaire Associés" />
          <Tab label="Données Collectées" />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-row items-start border-b-2 pb-8">
          <div className="w-2/3">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row">
                <div>
                  <TextField
                    id="standard-read-only-input"
                    label="Statut"
                    defaultValue="En cours"
                    variant="standard"
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#E5E7EB", // Default color
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottomColor: "#E5E7EB", // Hover color
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#E5E7EB", // Focused color
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-read-only-input"
                    label="Echéance"
                    defaultValue="01/09/2024"
                    variant="standard"
                    slotProps={{
                      input: {
                        readOnly: false,
                      },
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#E5E7EB", // Default color
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottomColor: "#E5E7EB", // Hover color
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#E5E7EB", // Focused color
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-read-only-input"
                    label="Dernière mise à jour"
                    defaultValue="10/10/2024"
                    variant="standard"
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#E5E7EB", // Default color
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottomColor: "#E5E7EB", // Hover color
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#E5E7EB", // Focused color
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-read-only-input"
                    label="Taux d'avancement"
                    defaultValue="35%"
                    variant="standard"
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#E5E7EB", // Default color
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottomColor: "#E5E7EB", // Hover color
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#E5E7EB", // Focused color
                      },
                    }}
                  />
                </div>
              </div>
              <div>
                <TextField
                  fullWidth={true}
                  id="standard-multiline-static"
                  label="Description du projet"
                  multiline
                  rows={2}
                  defaultValue="Ce projet vise à collecter des données sur les terres agricoles
pour optimiser les ressources en eau."
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#E5E7EB", // Default color
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#E5E7EB", // Hover color
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#E5E7EB", // Focused color
                    },
                  }}
                />
              </div>
              <div>
                <TextField
                  fullWidth={true}
                  id="standard-multiline-static"
                  label="Agents assignés"
                  defaultValue="Groupe 01"
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#E5E7EB", // Default color
                    },
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                      borderBottomColor: "#E5E7EB", // Hover color
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#E5E7EB", // Focused color
                    },
                  }}
                />
              </div>
              <div>
                <a className="underline text-gray-500">Voir plus</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ml-10 border-b-2 pb-4 w-1/3">
            <div className="flex flex-row gap-4 items-center">
              <img src={EditProject} alt="Edit project" className="w-5 h-5" />
              <span>Modifier le projet</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img src={ShareProject} alt="Share project" className="w-5 h-5" />
              <span>Partager le projet</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img src={CreateFrom} alt="Create form" className="w-5 h-5" />
              <span>Créer un formulaire</span>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-6">
              <div className="flex items-center cursor-pointer bg-gray-700 p-2 gap-1 rounded">
                <img
                  src={FormCreateButton}
                  alt="Create form"
                  className="w-5 h-5"
                />
                <span className="text-white text-sm">Créer un formulaire</span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <img src={Filter} alt="Filter" className="w-4 h-4" />
                  <span className="text-xs">Filtrer</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={IconeTableau} alt="Tableau" className="w-4 h-4" />
                  <span className="text-xs">Champs</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={IconeArchiver} alt="Archiver" className="w-5 h-5" />
              <img src={IconSupprimer} alt="Supprimer" className="w-5 h-5" />
              <img
                src={IconModification}
                alt="Modification"
                className="w-5 h-5"
              />
              <img src={IconeFermer} alt="Fermer" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <Paper sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
              />
            </Paper>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-2 border-b-2 pb-4 border-gray-300">
            <span className="text-gray-400">Nombre total de soummissions</span>
            <span className="text-3xl font-semibold">0</span>
          </div>
          <div>
          <Paper sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={submissionRows}
                columns={submissionsColumns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
              />
            </Paper>
          </div>
        </div>
      </CustomTabPanel>
    </main>
  );
};

export default ProjectDetails;
