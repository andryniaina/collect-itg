import { TextField } from "@mui/material";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen gap-[150px]">
      <div className="flex flex-col w-[500px]">
        <h1 className="text-3xl font-bold">
          Simplifiez la gestion de vos données avec TASKFORM
        </h1>
        <span className="text-gray-600">
        Simplifiez la gestion de vos données et optimisez la traçabilité de vos produits avec TaskForm. Notre plateforme vous accompagne dans le suivi détaillé de vos projets, en vous offrant des outils intuitifs pour collecter, analyser, et centraliser toutes vos informations en un seul endroit. Avec TaskForm, assurez la transparence et la qualité de vos processus pour une traçabilité complète de vos opérations.
        </span>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold">Connexion à votre compte</h1>
        <div>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <span>Mot de passe oublié ?</span>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Connexion
          </button>
        </div>
        <span>Pas encore inscrit? Créer un compte</span>
      </div>
    </div>
  );
}

export default Login;
