import { TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../../../services/user";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/AuthContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onChangeMail = (e: any) => {
    setEmail(e.target.value);
  };
  const {setToken} = useAuth();
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onLogin = async () => {
    try {
      const response = await login(email, password);
      console.log(response);
      setToken(response?.access_token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[url('src/assets/icons/Background.png')] bg-no-repeat bg-center">
      <div className="flex items-start justify-center gap-[150px]">
        <div className="flex flex-col w-[400px] gap-7 z-10">
          <h1 className="text-2xl font-semibold text-gray-900 w-[300px]">
            Simplifiez la gestion de vos données avec TASKFORM
          </h1>
          <span className="text-gray-600">
            Simplifiez la gestion de vos données et optimisez la traçabilité de
            vos produits avec TaskForm. Notre plateforme vous accompagne dans le
            suivi détaillé de vos projets, en vous offrant des outils intuitifs
            pour collecter, analyser, et centraliser toutes vos informations en
            un seul endroit. Avec TaskForm, assurez la transparence et la
            qualité de vos processus pour une traçabilité complète de vos
            opérations.
          </span>
        </div>
        <div className="flex flex-col px-16 py-12 rounded-lg gap-5 z-10 bg-white">
          <h1 className="text-3xl font-semibold text-gray-900">
            Connexion à votre compte
          </h1>
          <div className="flex flex-col gap-7">
            <div>
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                value={email}
                onChange={onChangeMail}
              />
            </div>
            <div>
              <TextField
                label="Password"
                variant="standard"
                fullWidth
                type="password"
                value={password}
                onChange={onChangePassword}
              />
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
            Pas encore inscrit? Créer un compte
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
