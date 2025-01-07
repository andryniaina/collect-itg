import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/Logo.png";
import IconProjet from "../../../assets/icons/IconProjet.svg";
import IconParams from "../../../assets/icons/IconeParams.svg";
import IconLogout from "../../../assets/icons/IconLogout.svg";
import IconeRapport from "../../../assets/icons/IconeRapport.svg";
import IconDashboard from "../../../assets/icons/IconDashboard.svg";
import IconCreationFormulaire from "../../../assets/icons/IconCreationFormulaire.svg";
import IconAgents from "../../../assets/icons/IconAgents.svg";
import { useAuth } from "../../../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Sidebar = () => {
  const queryClient = useQueryClient();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    navigate("/login");
  };
  return (
    <div className="w-80 bg-gray-100 h-full flex flex-col">
      <div className="flex items-center justify-center mt-10 mb-5 gap-1">
        <img src={Logo} alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold ml-2">TASKFORM</span>
      </div>
      <nav className="flex-1 p-5 mt-16">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <img src={IconDashboard} alt="Dashboard" className="h-5 w-5" />
              <span className="ml-4">Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <img src={IconProjet} alt="Projects" className="h-5 w-5" />
              <span className="ml-4">Gestion des projets</span>
            </Link>
          </li>
          <li>
            <Link
              to="/forms"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <img
                src={IconCreationFormulaire}
                alt="Forms"
                className="h-5 w-5"
              />
              <span className="ml-4">Gestion de formulaires</span>
            </Link>
          </li>
          <li>
            <Link
              to="/agents"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <img src={IconAgents} alt="Agents" className="h-5 w-5" />
              <span className="ml-4">Gestion des agents</span>
            </Link>
          </li>
          <li>
            <Link
              to="/data"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <img src={IconeRapport} alt="Data" className="h-5 w-5" />
              <span className="ml-4">Données</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 mb-5">
        <Link
          to="/settings"
          className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg"
        >
          <img src={IconParams} alt="Settings" className="h-5 w-5" />
          <span className="ml-4">Paramètres</span>
        </Link>
        <div className="flex items-center p-3 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-lg" onClick={logoutUser}>
          <img src={IconLogout} alt="Logout" className="h-5 w-5" />
          <span className="ml-4">Déconnexion</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
