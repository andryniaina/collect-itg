import Notif from "../../../assets/icons/Notif.svg";
import Avatar from "../../../assets/icons/Avatar.svg";
import IconRecherche from "../../../assets/icons/IconRecherche.svg";
import Filter from "../../../assets/icons/Filter.svg";
import IconeTableau from "../../../assets/icons/IconeTableau.svg";
import IconSupprimer from "../../../assets/icons/IconSupprimer.svg";
import IconModification from "../../../assets/icons/IconModification.svg";
import IconeFermer from "../../../assets/icons/IconeFermer.svg";
import IconeArchiver from "../../../assets/icons/IconeArchiver.svg";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconNewProject from "../../../assets/icons/IconNewProject.svg";
import { useProjects } from "../../../hooks/projects";
import { useUserProfile } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import { createProject } from "../../../services/project";
import { CreateProjectDto } from "../../../data/dtos/create-project.dto";
import { IProject } from "../../../data/interfaces/project.interface";
import { useQueryClient } from "@tanstack/react-query";
import IconClosed from "../../../assets/icons/IconClosed.svg";
import { useNavigate } from "react-router-dom";

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

const localizedTextsMap = {
  footerRowSelected: (count: number) =>
    count !== 1
      ? `${count.toLocaleString()} lignes sélectionnées`
      : `${count.toLocaleString()} ligne sélectionnée`,
};

const paginationModel = { page: 0, pageSize: 5 };

interface ProjectRow {
  id: string;
  name: string;
  region: string;
  echeance: string;
  status: string;
  agentsNumber: number;
  forms: number;
  advancement: string;
}

function Projects() {
  const { data: projects } = useProjects();
  const { data: userProfile } = useUserProfile();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [rows, setRows] = useState<ProjectRow[]>([
  ]);

  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedRowsIds, setSelectedRowsIds] = useState<string[]>([]);

  const handleRowSelection = (selectionModel: GridRowSelectionModel) => {
    const selectedId = selectionModel.length > 0 ? selectionModel[0] : null;
    console.log("Selected ID =>", selectedId);
    setSelectedRowId(selectedId as string | null);
    setSelectedRowsIds(selectionModel.map((id) => id as string));
  };

  const editProject = () => {
    navigate(`/projects/${selectedRowId}`);
  }

  useEffect(() => {
    const newRows: ProjectRow[] = projects ? projects?.map((project: IProject) => {
      return {
        id: project._id,
        name: project.name,
        region: project.region,
        echeance: project.endDate,
        status: project.status,
        agentsNumber: project.agents.length,
        forms: project.forms.length,
        advancement: "30%",
      }
    }) : [];
    setRows(newRows);
  }, [projects]);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("base"); // "base" or "advanced"

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [project, setProject] = useState<CreateProjectDto>({
    name: "",
    description: "",
    endDate: Date.now().toString(),
    agents: [],
    forms: [],
    responsable: "",
    region: "Sud",
    priority: "",
    section: "",
  });

  const handleChange = (e: any) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await createProject(project);
    closeModal();
    queryClient.invalidateQueries({ queryKey: ["projects"] });
  };

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
            <span>{userProfile?.name}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center cursor-pointer bg-gray-700 p-2 gap-1 rounded">
              <img src={IconNewProject} alt="Create form" className="w-5 h-5" />
              <span className="text-white text-sm" onClick={openModal}>
                Nouveau projet
              </span>
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
            <button onClick={editProject}>
              <img
                src={IconModification}
                alt="Modification"
                className="w-5 h-5"
              />
            </button>
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
              onRowSelectionModelChange={handleRowSelection}
            />
          </Paper>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-[700px]">
              {/* Modal Header */}
              <div className="flex justify-center items-center px-6 py-4 mb-7 relative">
                <h2 className="text-lg font-semibold">Nouveau projet</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-900 absolute right-4 top-4"
                >
                  <img src={IconClosed} alt="close" />
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="flex border-b w-3/5 pl-5">
                <button
                  onClick={() => setActiveTab("base")}
                  className={`flex-1 px-4 py-2 text-center ${activeTab === "base"
                      ? "border-b-2 border-gray-600 font-semibold"
                      : "text-gray-600"
                    }`}
                >
                  Informations de base
                </button>
                <button
                  onClick={() => setActiveTab("advanced")}
                  className={`flex-1 px-4 py-2 text-center ${activeTab === "advanced"
                      ? "border-b-2 border-gray-600 font-semibold"
                      : "text-gray-600"
                    }`}
                >
                  Options avancées
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {activeTab === "base" ? (
                  <form className="space-y-4">
                    {/* Fields for "Informations de base" */}
                    <div>
                      <label className="block text-sm font-medium">
                        Nom du projet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        onChange={handleChange}
                        value={project.name}
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        onChange={handleChange}
                        value={project.description}
                        name="description"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Région <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-md" onChange={handleChange} value={project.region} name="region">
                        <option value="Sud">Sud</option>
                        <option value="Nord">Nord</option>
                        <option value="Est">Est</option>
                        <option value="Ouest">Ouest</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Échéance <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        onChange={handleChange}
                        value={project.endDate}
                        name="endDate"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Formulaires associés
                      </label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-md" onChange={handleChange} value={project.forms} name="forms">

                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Agents {/* <span className="text-red-500">*</span> */}
                      </label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-md" onChange={handleChange} value={project.agents} name="agents">

                      </select>
                    </div>
                  </form>
                ) : (
                  <form className="space-y-4">
                    {/* Fields for "Options avancées" */}
                    <div>
                      <label className="block text-sm font-medium">
                        Responsable
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        onChange={handleChange}
                        value={project.responsable}
                        name="responsable"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Priorité
                      </label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-md" onChange={handleChange} value={project.priority} name="priority">
                        <option>Haute</option>
                        <option>Moyenne</option>
                        <option>Basse</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Section
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border rounded-md"
                        onChange={handleChange}
                        value={project.section}
                        name="section"
                      />
                    </div>
                  </form>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex justify-center gap-6 px-6 py-4 border-t">
                <button
                  onClick={closeModal}
                  className="px-6 py-1 border-2 border-gray-400 text-gray-700 rounded-md mr-2 hover:bg-gray-400"
                >
                  Annuler
                </button>
                <button className="px-6 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  onClick={handleSubmit}>
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Projects;
