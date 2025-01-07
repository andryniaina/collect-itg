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
import IconNewProject from "../../../assets/icons/IconNewProject.svg";
import { useEffect, useState } from "react";
import { useAgents } from "../../../hooks/agents";
import { useUserProfile } from "../../../hooks/auth";
import { useProjects } from "../../../hooks/projects";
import { IProject } from "../../../data/interfaces/project.interface";
import { CreateAgentDto } from "../../../data/dtos/create-agent.dto";
import IconClosed from "../../../assets/icons/IconClosed.svg"
import { createAgent } from "../../../services/user";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nom de l'agent", width: 150 },
  { field: "role", headerName: "Role", width: 150 },
  { field: "group", headerName: "Groupe", width: 150 },
  {
    field: "status",
    headerName: "Statut",
    width: 150,
  },
  {
    field: "project",
    headerName: "Projet Assigné",
    width: 150,
  },
  {
    field: "lastMission",
    headerName: "Dernière mission",
    width: 170,
  },
  {
    field: "completion",
    headerName: "Taux de complétion",
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

interface AgentRow {
  id: string;
  name: string;
  role: string;
  group: string;
  status: string;
  project: string;
  lastMission: string;
  completion: string;
}

function Agents() {
  const { data: agents } = useAgents();
  const {data: projects} = useProjects();
  const { data: userProfile } = useUserProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customAuth, setCustomAuth] = useState(false);
  const [agentData, setAgentData] = useState<CreateAgentDto>({
    name: "",
    email: "",
    password: "123456",
    role: "Collaborateur",
    description: "",
    project: "",
  });

  const [rows, setRows] = useState<AgentRow[]>([]);

  useEffect(() => {
    if (projects && projects.length > 0) {
      setAgentData({ ...agentData, project: projects[0]._id });
    }
  }, [projects]);

  useEffect(() => {
    const newRows: AgentRow[] = agents ? agents?.map((agent: any) => ({
      id: agent._id,
      name: agent.name,
      role: agent.role,
      group: "Aucun",
      status: "Actif",
      project: agent.project,
      lastMission: "10/10/2024",
      completion: "30%",
    })) : [];
    setRows(newRows);
  }, [agents]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const saveAgent = async () => {
    await createAgent(agentData);
    handleCloseModal();
  };

  return (
    <main>
      <div className="flex flex-row justify-between items-center mb-36">
        <h1 className="font-bold">Gestion des agents</h1>
        <div className="flex border-2 p-2 rounded-full">
          <div className="flex items-center gap-1">
            <img
              src={IconRecherche}
              alt="Rechercher projet"
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="Rechercher un agent"
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
            <div
              className="flex items-center cursor-pointer bg-gray-700 p-2 gap-1 rounded"
              onClick={() => {
                handleOpenModal();
              }}
            >
              <img src={IconNewProject} alt="Create form" className="w-5 h-5" />
              <span className="text-white text-sm">Ajouter un agent</span>
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
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-xl p-6 pb-12 mx-4 h-4/5 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between mb-12">
              <span className="font-semibold">Ajouter un agent</span>
              <span className="hover:cursor-pointer" onClick={handleCloseModal}>
                <img src={IconClosed} alt="close" />
              </span>
            </div>

            <div className="flex flex-col px-2 h-5/6 overflow-y-scroll">
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">
                  Nom de l'agent: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder="Nom"
                  value={agentData.name}
                  onChange={(e) => setAgentData({...agentData, name: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">
                  Adresse e-mail: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder="Email"
                  value={agentData.email}
                  onChange={(e) => setAgentData({...agentData, email: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">
                  Projet(s) assigné(s) <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" value={agentData.project} onChange={(e) => setAgentData({...agentData, project: e.target.value})}>
                  {projects?.map((project:IProject)=>
                    <option key={project._id} value={project._id}>{project.name}</option>
                  )}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">
                  Role de l'agent: <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" value={agentData.role} onChange={(e) => setAgentData({...agentData, role: e.target.value})}>
                  <option>Collaborateur</option>
                  <option>Enqueteur</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">
                  Description du role:
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder=""
                  value={agentData.description}
                  onChange={(e) => setAgentData({...agentData, description: e.target.value})}
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 accent-black"
                  checked={customAuth}
                  onChange={(e) => setCustomAuth(e.target.checked)}
                />
                <span className="text-sm">Personnaliser les permissions</span>
              </div>
              {customAuth && (
                <>
                  <div className="pl-5">
                    <span className="text-sm">Permissions de formulaires</span>
                    <div className="flex flex-col pl-5">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Créer des formulaires</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Modifier des formulaires
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Supprimer des formulaires
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Déployer des formulaires
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-5">
                    <span className="text-sm">
                      Permissions sur les données collectées
                    </span>
                    <div className="flex flex-col pl-5">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Lecture seule</span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Téléchargement des données
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Modification/Suppression des données
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Valider les soummissions
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-5">
                    <span className="text-sm">Gestion des utilisateurs</span>
                    <div className="flex flex-col pl-5">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Ajouter ou retirer des agents
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Modifier les permissions des autres agents
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-5">
                    <span className="text-sm">
                      Accès aux paramètres de projet
                    </span>
                    <div className="flex flex-col pl-5">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Configuration des paramètres de projet
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">
                          Accès aux rapports et analyses avancées
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center justify-evenly mt-6">
              {/* Buttons */}
              <button className="px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-200 border-[1px] border-gray-700" onClick={handleCloseModal}>
                Annuler
              </button>
              <button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800" onClick={saveAgent}>
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Agents;
