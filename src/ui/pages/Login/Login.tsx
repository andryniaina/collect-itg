import { TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../../../services/user";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/AuthContext";
import { Link } from "react-router-dom";
import Vector from "../../../assets/icons/Vector.png";
import IconeEyes from "../../../assets/icons/IconeEyes.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const onChangeMail = (e: any) => {
    setEmail(e.target.value);
  };
  const { setToken } = useAuth();
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onLogin = async () => {
    try {
      console.log(email, password);
      const response = await login(email, password);
      console.log(response);
      setToken(response?.access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[url('src/assets/icons/Background.png')] bg-no-repeat bg-center bg-[length:1166px_511px]">
      <div className="flex items-start justify-center gap-[150px] relative pb-[1%]">
        <div className="absolute top-[-170px] right-[75px]">
          <img src={Vector} alt="Vector" className="w-[120px] h-[120px]" />
        </div>
        <div className="flex flex-col w-[350px] gap-7 z-10">
          <h1 className="text-2xl font-semibold text-gray-900 w-[300px]">
            Simplifiez la gestion de vos données avec TASKFORM
          </h1>
          <span className="text-gray-600 text-sm">
            Simplifiez la gestion de vos données et optimisez la traçabilité de
            vos produits avec TaskForm. Notre plateforme vous accompagne dans le
            suivi détaillé de vos projets, en vous offrant des outils intuitifs
            pour collecter, analyser, et centraliser toutes vos informations en
            un seul endroit. Avec TaskForm, assurez la transparence et la
            qualité de vos processus pour une traçabilité complète de vos
            opérations.
          </span>
        </div>
        <div className="flex flex-col px-16 py-12 rounded-lg gap-5 z-10 bg-white shadow-md">
          <h1 className="text-3xl font-semibold text-gray-900">
            Connexion à votre compte
          </h1>
          <div className="flex flex-col gap-7 text-sm">
            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
                  placeholder="rakotonirina@gmail.com"
                  value={email}
                  onChange={onChangeMail}
                  autoComplete='username'
                />
              </div>
            {/* Password */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='new-password'
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {/* Placeholder for eye icon */}
                    <img src={IconeEyes} alt="IconeEyes" />
                  </button>
                </div>
              </div>
            <span className="flex items-center justify-center text-gray-500">
              Mot de passe oublié ?
            </span>
            <div className="flex items-center justify-center">
              <button className="bg-gray-800 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded w-[325px]" onClick={onLogin}>
                Connexion
              </button>
            </div>
          </div>
          <span className="flex items-center justify-center text-gray-500">
            Pas encore inscrit?<Link to="/register"><span className="underline ml-2">Créer un compte</span></Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
