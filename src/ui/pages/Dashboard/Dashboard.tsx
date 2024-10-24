import IconRecherche from "../../../assets/icons/IconRecherche.svg";
import Filter from "../../../assets/icons/Filter.svg";
import Notif from "../../../assets/icons/Notif.svg";
import Avatar from "../../../assets/icons/Avatar.svg";
import IconNewProject from "../../../assets/icons/IconNewProject.svg";
import FormCreateButton from "../../../assets/icons/IconCreateForm.svg";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
const dataset = [
  { x: 1, y: 2 },
  { x: 2, y: 5.5 },
  { x: 3, y: 2 },
  { x: 5, y: 8.5 },
  { x: 8, y: 1.5 },
  { x: 10, y: 12 },
  { x: 12, y: 3 },
  { x: 14, y: 8 },
  { x: 16, y: 5 },
  { x: 18, y: 4 },
  { x: 20, y: 9 },
  { x: 22, y: 8 },
  { x: 24, y: 2 },
  { x: 26, y: 7 },
  { x: 28, y: 14 },
  { x: 30, y: 2 },
  { x: 32, y: 8 },
];
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
    width: 160,
  },
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
    advancement: "30%",
  },
  {
    id: "1",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%",
  },
  {
    id: "1",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%",
  },
  {
    id: "1",
    name: "Projet 01",
    region: "Sud",
    echeance: "01/08/2024",
    status: "En cours",
    agentsNumber: 5,
    forms: 10,
    advancement: "30%",
  },
];

const paginationModel = { page: 0, pageSize: 5 };
function Dashboard() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-24">
        <h1 className="font-bold">Dashboard</h1>
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
      <div className="flex items-end gap-32 mb-10">
        <div className="flex flex-col w-2/6 gap-4">
          <div className="flex justify-between">
            <span className="font-semibold text-sm">Projets</span>
            <span className="font-semibold text-sm">octobre 2024</span>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col p-2 gap-2 border-b-2">
              <span className="font-bold text-lg">03</span>
              <span className="text-xs text-gray-500">En cours</span>
            </div>
            <div className="flex flex-col p-2 gap-2 border-b-2">
              <span className="font-bold text-lg">02</span>
              <span className="text-xs text-gray-500">Terminés</span>
            </div>
            <div className="flex flex-col p-2 gap-2 border-b-2">
              <span className="font-bold text-lg">01</span>
              <span className="text-xs text-gray-500">En retard</span>
            </div>
            <div className="flex flex-col p-2 gap-2 border-b-2">
              <span className="font-bold text-lg">06</span>
              <span className="text-xs text-gray-500">
                Nombre total de projets
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex items-center cursor-pointer bg-gray-700 p-3 gap-1 rounded border-2 border-gray-700">
            <img src={IconNewProject} alt="Create form" className="w-5 h-5" />
            <span className="text-white text-sm">Nouveau projet</span>
          </div>
          <div className="flex items-center cursor-pointer p-3 gap-1 rounded border-2 border-gray-500">
            <img src={FormCreateButton} alt="Create form" className="w-5 h-5" />
            <span className="text-sm">Créer un formulaire</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-2">
        <div className="flex flex-col gap-4 border-b-2 pb-4 w-2/5">
          <span className="text-xs">
            Répartition des projets par groupe d'agents
          </span>
          <PieChart
            colors={["#454A52", "#828B99", "#ADBACC"]}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Group A" },
                  { id: 1, value: 15, label: "Group B" },
                  { id: 2, value: 20, label: "Group C" },
                ],
                innerRadius: 100,
              },
            ]}
            width={400}
            height={250}
            slotProps={{ legend: { hidden: true } }}
          />
        </div>
        <div className="w-3/5 border-b-2">
          <div className="flex justify-betweeen items-center">
            <div className="flex flex-col pl-2 gap-2">
              <span className="text-sm text-gray-600">Formulaires soumis</span>
              <span className="text-xs text-gray-500">Année 2024</span>
            </div>
            <div></div>
          </div>
          <LineChart
            colors={["#454A52", "#828B99", "#ADBACC"]}
            dataset={dataset}
            xAxis={[{ dataKey: "x" }]}
            series={[{ dataKey: "y" }]}
            height={250}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
      <div>
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
            />
          </Paper>
        </div>
    </div>
  );
}

export default Dashboard;
