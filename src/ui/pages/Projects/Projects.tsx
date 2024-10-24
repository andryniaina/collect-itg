import Notif from "../../../assets/icons/Notif.svg";
import Avatar from "../../../assets/icons/Avatar.svg";
import IconRecherche from "../../../assets/icons/IconRecherche.svg";
import Filter from "../../../assets/icons/Filter.svg";
import IconeTableau from "../../../assets/icons/IconeTableau.svg";
import IconSupprimer from "../../../assets/icons/IconSupprimer.svg";
import IconModification from "../../../assets/icons/IconModification.svg";
import IconeFermer from "../../../assets/icons/IconeFermer.svg";
import IconeArchiver from "../../../assets/icons/IconeArchiver.svg";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconNewProject from "../../../assets/icons/IconNewProject.svg"

const columns: GridColDef[] = [
  { field: "name", headerName: "Nom du projet", width: 150 },
  { field: "region", headerName: "Région", width: 150 },
  { field: "echeance", headerName: "Echéance", width: 150 },
  {
    field: "status",
    headerName: "Statut",
    width: 150,
  },
  {
    field: "agentsNumber",
    headerName: "Nombre d'agents",
    width: 150,
  },
  {
    field: "forms",
    headerName: "Formulaires associés",
    width: 170,
  },
  {
    field: "advancement",
    headerName: "Taux d'avancement",
    width: 160
  }
];

const rows = [
  {
    id: "1",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%"
  },
  {
    id: "2",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%"
  },
  {
    id: "3",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%"
  },
  {
    id: "4",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%"
  }
];

const localizedTextsMap = {
  footerRowSelected: (count:number) =>
    count !== 1
      ? `${count.toLocaleString()} lignes sélectionnées`
      : `${count.toLocaleString()} ligne sélectionnée`,
};


const paginationModel = { page: 0, pageSize: 5 };

function Projects() {
  return (
    <main>
      <div className="flex flex-row justify-between items-center mb-36">
        <h1 className="font-bold">Gestion des projets</h1>
        <div className="flex border-2 p-2 rounded-full">
          <div className="flex items-center gap-1">
            <img
              src={IconRecherche}
              alt="Rechercher projet"
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="Rechercher un projet"
              className="w-full min-w-96 h-5 focus:border-none focus:outline-none"
            />
          </div>
          <div>
            <img src={Filter} alt="Filter" className="w-5 h-5 items-center" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img src={Notif} alt="Notification" className="h-5 w-5" />
          <div className="flex flex-row items-center gap-2">
            <img src={Avatar} alt="Avatar" className="h-3 w-3" />
            <span>Richard</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center cursor-pointer bg-gray-700 p-2 gap-1 rounded">
              <img
                src={IconNewProject}
                alt="Create form"
                className="w-5 h-5"
              />
              <span className="text-white text-sm">Nouveau projet</span>
            </div>
            <div className="flex gap-4">
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
              localeText={localizedTextsMap}
              sx={{ border: 0 }}
            />
          </Paper>
        </div>
      </div>
    </main>
  );
}

export default Projects;
