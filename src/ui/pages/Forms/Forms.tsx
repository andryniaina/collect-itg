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
import FormCreateButton from "../../../assets/icons/FormCreateButton.svg";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForms } from "../../../hooks/forms";
import { useUserProfile } from "../../../hooks/auth";
import IconeUpload from "../../../assets/icons/IconeUpload.svg";
import { CreateFormDto } from "../../../data/dtos/create-form.dto";
import { createForm } from "../../../services/form";
import { IForm } from "../../../data/interfaces/form.interface";
import { useProjects } from "../../../hooks/projects";
import { IProject } from "../../../data/interfaces/project.interface";
import { deleteForms } from "../../../services/form";
import { useQueryClient } from "@tanstack/react-query";
import { DeleteFormsDto } from "../../../data/dtos/detele-forms.dto";

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

interface FormRow {
  id: string;
  name: string;
  lastUpdated: string;
  status: string;
  deploymentDate: string;
  submissions: string;
}

const paginationModel = { page: 0, pageSize: 5 };

function Forms() {
  const { data: userProfile } = useUserProfile();
  const { data: forms } = useForms();
  const navigate = useNavigate();
  const { data: projects } = useProjects();
  const queryClient = useQueryClient();


  useEffect(() => {
    if (projects && projects.length > 0) {
      setForm({ ...form, project: projects[0]._id });
    }
  }, [projects]);

  const [rows, setRows] = useState<FormRow[]>([]);

  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedRowsIds, setSelectedRowsIds] = useState<string[]>([]);

  const handleRowSelection = (selectionModel: GridRowSelectionModel) => {
    const selectedId = selectionModel.length > 0 ? selectionModel[0] : null;
    console.log("Selected ID =>", selectedId);
    setSelectedRowId(selectedId as string | null);
    setSelectedRowsIds(selectionModel.map((id) => id as string));
  };

  const gotoBuilder = () => {
    if (!selectedRowId) return;
    const id = selectedRowId as string;
    navigate("/forms/builder/" + id);
  };

  const handleDelete = async () => {
    console.log("Selected IDs =>", selectedRowsIds);
    const deletePayload: DeleteFormsDto = { ids: selectedRowsIds };
    if (!selectedRowsIds.length) return;
    await deleteForms(deletePayload);
    queryClient.invalidateQueries({ queryKey: ["forms"] });
  };

  useEffect(() => {
    const newRows: FormRow[] = forms ? forms?.map((form: IForm) => ({
      id: form._id,
      name: form.name,
      lastUpdated: form.updatedAt,
      status: form.status,
      deploymentDate: form.createdAt,
      submissions: "0/100",
    })) : [];
    setRows(newRows);
  }, [forms]);

  const [form, setForm] = useState<CreateFormDto>({
    name: "",
    description: "",
    version: "1",
    section: "Santé",
    type: "Formulaire d'Enquête",
    country: "Madagascar",
    header: "",
    logo: "",
    project: "",
  });

  // State to control the visibility of the first modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to control the visibility of the second modal
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  // State to manage the active tab in the second modal
  const [activeTab, setActiveTab] = useState(0);

  // Function to close the first modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to open the first modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const location = useLocation();

  useEffect(() => {
    const state = location.state as any;
    if (state?.createForm) {
      handleOpenModal();
    }
  }, []);


  // Function to open the second modal and hide the first one
  const handleOpenSecondModal = () => {
    setIsModalOpen(false); // Hide the first modal
    setIsSecondModalOpen(true); // Show the second modal
  };

  // Function to close the second modal
  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  // Function to toggle tabs in the second modal
  const toggleTab = (index: number) => {
    setActiveTab(index);
  };

  const handleSubmit = async () => {
    const createdForm = await createForm(form);
    console.log({ createdForm });
    if (!createdForm) return;
    navigate("/forms/builder/" + createdForm._id);
  };

  return (
    <main>
      <div className="flex flex-row justify-between items-center mb-36">
        <h1 className="font-bold">Gestion des formulaires</h1>
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
            <div
              className="flex items-center cursor-pointer bg-gray-700 p-2 gap-1 rounded"
              onClick={handleOpenModal}
            >
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
            <button onClick={handleDelete} className="flex items-center gap-1">
              <img src={IconSupprimer} alt="Supprimer" className="w-5 h-5" />
            </button>
            <button onClick={gotoBuilder} className="flex items-center gap-1">
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
              sx={{ border: 0 }}
              onRowSelectionModelChange={handleRowSelection}
            />
          </Paper>
        </div>
      </div>

      {/* First Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-lg p-6 mx-4 bg-white rounded-lg shadow-lg">
            {/* Close button for first modal */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={handleCloseModal}
            >
              &#x2715;
            </button>

            {/* First Modal content */}
            <h2 className="mb-4 text-xl font-semibold">
              Création de formulaire
            </h2>

            {/* Form content */}
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Sélectionnez un projet <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}>
                {projects && projects.map((project: IProject) => (
                  <option key={project._id} value={project._id}>{project.name}</option>
                ))}
              </select>
            </div>

            <p className="mb-4 text-gray-700">
              Choisissez parmi ces types d'options pour créer votre formulaire:
            </p>

            {/* Card options */}
            <div className="grid grid-cols-3 gap-4">
              <div
                className="p-4 text-center border rounded-lg cursor-pointer hover:shadow-md"
                onClick={handleOpenSecondModal} // Trigger second modal on click
              >
                <p className="mb-2 text-lg">✏️</p>
                <p>Créer de A à Z</p>
              </div>
              <div className="p-4 text-center border rounded-lg cursor-pointer hover:shadow-md">
                <p className="mb-2 text-lg">📄</p>
                <p>Type EPCIS</p>
              </div>
              <div className="p-4 text-center border rounded-lg cursor-pointer hover:shadow-md">
                <p className="mb-2 text-lg">📋</p>
                <p>Template</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {isSecondModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-xl p-8 mx-4 bg-white rounded-lg shadow-lg ">
            {/* Close button for second modal */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={handleCloseSecondModal}
            >
              &#x2715;
            </button>

            {/* Second Modal content */}
            <h2 className="mb-4 text-xl font-semibold">
              Configuration initiale
            </h2>

            {/* Tab navigation */}
            <div className="flex justify-center mb-4">
              <button
                className={`w-4 h-4 rounded-full mr-2 ${activeTab === 0 ? "bg-black" : "bg-gray-300"
                  }`}
                onClick={() => toggleTab(0)}
              ></button>
              <button
                className={`w-4 h-4 rounded-full ${activeTab === 1 ? "bg-black" : "bg-gray-300"
                  }`}
                onClick={() => toggleTab(1)}
              ></button>
            </div>

            {/* Conditional content based on the active tab */}
            {activeTab === 1 && (
              <div>
                {/* Form header */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">
                    En-tête du formulaire:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enquête agricole"
                    value={form.header}
                    onChange={(e) => setForm({ ...form, header: e.target.value })}
                  />
                </div>

                {/* Logo upload */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">Logo:</label>
                  <div className="w-full p-4 border-2 border-dashed rounded-md cursor-pointer hover:shadow-md">
                    <div className="flex flex-col items-center">
                      <img src={IconeUpload} alt="Upload" className="w-5 h-5" />
                      <p className="text-gray-400">
                        Glissez et déposez votre fichier ici
                      </p>
                      <button className="px-4 py-2 mt-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none">
                        Parcourir
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cancel and Create buttons */}
                <div className="flex justify-center mt-6 gap-7">
                  <button onClick={() => toggleTab(0)} className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
                    Précédent
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
                  >
                    Créer
                  </button>
                </div>
              </div>
            )}

            {activeTab === 0 && (
              <div>
                {/* Form name */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">
                    Nom du formulaire: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Formulaire A"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">
                    Description:
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder=""
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  ></textarea>
                </div>

                {/* Section */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">
                    Section: <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={form.section}
                    onChange={(e) => setForm({ ...form, section: e.target.value })}>
                    <option>Santé</option>
                    <option>Agriculture</option>
                    <option>Éducation</option>
                  </select>
                </div>

                {/* Form type */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">
                    Types de formulaires:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option>Formulaire d'Enquête</option>
                    <option>Formulaire d'Étude</option>
                    <option>Formulaire de Recherche</option>
                  </select>
                </div>

                {/* Country */}
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">
                    Pays: <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  >
                    <option>Madagascar</option>
                    <option>France</option>
                    <option>États-Unis</option>
                  </select>
                </div>

                {/* Cancel and Next buttons */}
                <div className="flex justify-center mt-6 gap-7">
                  <button onClick={handleCloseSecondModal} className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
                    Annuler
                  </button>
                  <button onClick={() => toggleTab(1)} className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none">
                    Suivant
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Forms;
