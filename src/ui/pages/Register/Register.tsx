import TextField from "@mui/material/TextField";
import React from "react";

function Register() {
  return (
    <main className="flex h-screen">
      <div>
        <span>
          Rejoignez une plateforme conçue pour vous aider à suivre vos données
          et vos projets en toute simplicité.
        </span>
        <div>
          <div>
            <span>Sécurité des données</span>
          </div>
          <div>
            <span>Traçabilité simplifiée</span>
          </div>
          <div>
            <span>Accessibilité</span>
          </div>
          <div>
            <span>Support personnalisé</span>
          </div>
        </div>
      </div>
      <div>
        <span>Créer un compte</span>
        <div><TextField id="standard-basic" label="Standard" variant="standard" /></div>
        <div><TextField id="standard-basic" label="Standard" variant="standard" /></div>
        <div><TextField id="standard-basic" label="Standard" variant="standard" /></div>
        <div><TextField id="standard-basic" label="Standard" variant="standard" /></div>
        <div><TextField id="standard-basic" label="Standard" variant="standard" /></div>
        <div>
          <button>Créer un compte</button>
        </div>
        <span className="text-gray-600">
          Déjà un compte? <a href="">Connectez-vous</a>
        </span>
      </div>
    </main>
  );
}

export default Register;