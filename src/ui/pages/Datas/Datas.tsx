import Notif from "../../../assets/icons/Notif.svg";
import Avatar from "../../../assets/icons/Avatar.svg";
import IconRecherche from "../../../assets/icons/IconRecherche.svg";
import Filter from "../../../assets/icons/Filter.svg";
import IconClosed from "../../../assets/icons/IconClosed.svg";
import { useState } from "react";
import { useUserProfile } from "../../../hooks/auth";

function Datas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: userProfile } = useUserProfile();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <div className="flex flex-row justify-between items-center mb-36">
        <h1 className="font-bold">Les données collectées</h1>
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
      <div className="flex flex-row items-center w-full gap-6 flex-wrap">
        <div className="flex flex-col w-[500px] min-w-[500px] relative shadow-md shadow-slate-200">
          <div className="absolute right-0 text-center text-white bg-gray-700 py-2 px-4 text-xs rounded-tr-md rounded-bl-md justify-end">
            Approuvé
          </div>
          <div className="flex flex-col gap-9 p-5 pb-6">
            <span className="font-semibold w-3/5 text-xl">
              Enquete de satisfation des clients
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Responsable:</span>
                <span>Christian</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Taux d'avancement:</span>
                <span>100%</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Dernère soumission:</span>
                <span>04/09/2024</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de formulaires déployés:
                </span>
                <span>03</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de réponses collectées:
                </span>
                <span>200</span>
              </div>
            </div>
            <div className="flex flex-row justify-center underline">
              <span className="cursor-pointer" onClick={openModal}>
                Voir détails
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[500px] min-w-[500px] relative shadow-md shadow-slate-200">
          <div className="absolute right-0 text-center text-white bg-gray-700 py-2 px-4 text-xs rounded-tr-md rounded-bl-md justify-end">
            Approuvé
          </div>
          <div className="flex flex-col gap-9 p-5 pb-6">
            <span className="font-semibold w-3/5 text-xl">
              Enquete de satisfation des clients
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Responsable:</span>
                <span>Christian</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Taux d'avancement:</span>
                <span>100%</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Dernère soumission:</span>
                <span>04/09/2024</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de formulaires déployés:
                </span>
                <span>03</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de réponses collectées:
                </span>
                <span>200</span>
              </div>
            </div>
            <div className="flex flex-row justify-center underline">
              <span className="cursor-pointer">Voir détails</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[500px] min-w-[500px] relative shadow-md shadow-slate-200">
          <div className="absolute right-0 text-center text-white bg-gray-700 py-2 px-4 text-xs rounded-tr-md rounded-bl-md justify-end">
            Approuvé
          </div>
          <div className="flex flex-col gap-9 p-5 pb-6">
            <span className="font-semibold w-3/5 text-xl">
              Enquete de satisfation des clients
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Responsable:</span>
                <span>Christian</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Taux d'avancement:</span>
                <span>100%</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Dernère soumission:</span>
                <span>04/09/2024</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de formulaires déployés:
                </span>
                <span>03</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de réponses collectées:
                </span>
                <span>200</span>
              </div>
            </div>
            <div className="flex flex-row justify-center underline">
              <span className="cursor-pointer">Voir détails</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[500px] min-w-[500px] relative shadow-md shadow-slate-200">
          <div className="absolute right-0 text-center text-white bg-gray-700 py-2 px-4 text-xs rounded-tr-md rounded-bl-md justify-end">
            Approuvé
          </div>
          <div className="flex flex-col gap-9 p-5 pb-6">
            <span className="font-semibold w-3/5 text-xl">
              Enquete de satisfation des clients
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Responsable:</span>
                <span>Christian</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Taux d'avancement:</span>
                <span>100%</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">Dernère soumission:</span>
                <span>04/09/2024</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de formulaires déployés:
                </span>
                <span>03</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="text-gray-600">
                  Nbre de réponses collectées:
                </span>
                <span>200</span>
              </div>
            </div>
            <div className="flex flex-row justify-center underline">
              <span className="cursor-pointer">Voir détails</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-3xl p-6 mx-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-5">
                <span className="font-semibold text-sm">
                  Informations générales
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex  gap-1">
                    <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                      Nom du projet:
                    </span>
                    <span className="text-xs text-gray-800">
                      Enquete de satisfaction client 2023
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                      Description:
                    </span>
                    <span className="text-xs text-gray-800">
                      Ce projet vise à évaluer la satisfaction des clients sur
                      les produits et services offerts, afin d'identifier les
                      axes d'amélioration et d'optimiser l'expérience client.
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                      Objectif:
                    </span>
                    <span className="text-xs text-gray-800">
                      Collecter des données sur la perception des clients
                      concernant la qualité des produits, le support client, et
                      les processus d’achat
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                      Responsable:
                    </span>
                    <span className="text-xs text-gray-800">Christian</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                      Equipe assignée:
                    </span>
                    <span className="text-xs text-gray-800">Groupe 01</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-5">
                  <span className="font-semibold text-sm">Statut et Dates</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex  gap-1">
                      <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                        Statut:
                      </span>
                      <span className="text-xs text-gray-800">Terminé</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                        Date de lancement:
                      </span>
                      <span className="text-xs text-gray-800">
                        1er septembre 2023
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                        Date de fin prévue:
                      </span>
                      <span className="text-xs text-gray-800">
                        1er septembre 2023
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-[125px] min-w-[125px] text-xs text-gray-500">
                        Dernière mise à jour:
                      </span>
                      <span className="text-xs text-gray-800">
                        1er septembre 2023
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="font-semibold text-sm">
                    Indicateurs Clés de Performance (KPI)
                  </span>
                  <div className="flex flex-col gap-2">
                    <div className="flex  gap-1">
                      <span className="w-[200px] min-w-[200px] text-xs text-gray-500">
                        Nbre total de formulaires déployés:
                      </span>
                      <span className="text-xs text-gray-800">03</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-[200px] min-w-[200px] text-xs text-gray-500">
                        Nbre de réponses collectées:
                      </span>
                      <span className="text-xs text-gray-800">200</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-[200px] min-w-[200px] text-xs text-gray-500">
                        Taux de complétion:
                      </span>
                      <span className="text-xs text-gray-800">100%</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-[200px] min-w-[200px] text-xs text-gray-500">
                        Nbre de questions par formulaire:
                      </span>
                      <span className="text-xs text-gray-800">
                        10 à 15 questions par formulaire
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="font-semibold text-sm">
                  Formulaires associés
                </span>
                <span className="text-xs text-gray-500">
                  Veuillez sélectionner le formulaire dont vous souhaitez voir
                  les résultats
                </span>
                <div className="flex flex-col gap-5">
                  <div className="flex border-2 p-2 rounded-sm justify-between">
                    <div className="flex items-center ">
                      <img
                        src={IconRecherche}
                        alt="Rechercher formulaire"
                        className="w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Rechercher formulaire"
                        className="w-full min-w-96 h-5 focus:border-none focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <img
                        src={Filter}
                        alt="Filter"
                        className="w-5 h-5 items-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-[100px] max-h-[100px] border-2 p-3 overflow-y-scroll gap-2">
                    <div className="flex flex-row items-center gap-3">
                      <input
                        type="radio"
                        name="form"
                        value="HTML"
                        className="accent-gray-900"
                      />
                      <label className="text-sm text-gray-900">
                        Formulaire 1: Évaluation de la qualité du produit
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <input
                        type="radio"
                        name="form"
                        value="HTML"
                        className="accent-gray-900"
                      />
                      <label className="text-sm text-gray-900">
                        Formulaire 2: Évaluation de la qualité du produit
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <input
                        type="radio"
                        name="form"
                        value="CSS"
                        className="accent-gray-900"
                      />
                      <label className="text-sm text-gray-900">
                        Formulaire 3: Satisfaction par rapport au service client
                      </label>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <input
                        type="radio"
                        name="form"
                        value="JavaScript"
                        className="accent-gray-900"
                      />
                      <label className="text-sm text-gray-900">
                        Formulaire 4: Retour d'expérience sur le processus
                        d'achat
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-11">
                    <div className="text-gray-700 text-xs py-1 px-12 border-gray-700 border-[1px] rounded-sm">
                      Annuler
                    </div>
                    <div className="text-white text-xs py-1 px-6 border-gray-700 bg-gray-700 border-[1px] rounded-sm">
                      Afficher les résultats
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-5 top-5 cursor-pointer" onClick={closeModal}>
              <img src={IconClosed} alt="Closed" className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Datas;
