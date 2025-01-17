import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from "../../../services/user";
import PC from "../../../assets/icons/PC.svg";
import Sécurité from "../../../assets/icons/Sécurité.svg";
import Traçabilité from "../../../assets/icons/Traçabilité.svg";
import Support from "../../../assets/icons/Support.svg";
import IconeEyes from "../../../assets/icons/IconeEyes.svg";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      const response = await register(name, email, phone, password);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className= "p-8 w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-36">
          {/* Left Column - Features */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 max-w-96">
              Rejoignez une plateforme conçue pour vous aider à suivre vos données et vos projets en toute simplicité.
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {/* Security Feature */}
              <div className="shadow-md p-4 rounded-lg flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <img src={Sécurité} alt="Sécurité" />
                </div>
                <p className="text-sm text-gray-600">Sécurité des données</p>
              </div>

              {/* Traceability Feature */}
              <div className="shadow-md p-4 rounded-lg flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <img src={Traçabilité} alt="Traçabilité" />
                </div>
                <p className="text-sm text-gray-600">Traçabilité simplifiée</p>
              </div>

              {/* Accessibility Feature */}
              <div className="shadow-md p-4 rounded-lg flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <img src={PC} alt="PC" />
                </div>
                <p className="text-sm text-gray-600">Accessibilité</p>
              </div>

              {/* Support Feature */}
              <div className="shadow-md p-4 rounded-lg flex flex-col items-center justify-center">
                <div className="w-12 h-12rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <img src={Support} alt="Support" />
                </div>
                <p className="text-sm text-gray-600">Support personnalisé</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 shadow-md p-8 pt-0 rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Créer un compte</h1>
            <div className="flex flex-col gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
                  placeholder="Rakoto Nirina"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='username'
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
                  placeholder="+261"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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

              {/* Confirm Password */}
              <div className="mb-7">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete='new-password'
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {/* Placeholder for eye icon */}
                    <img src={IconeEyes} alt="IconeEyes" />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                onClick={registerUser}
              >
                Créer un compte
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Déjà un compte?{' '}
                <Link to="/login" className="underline">
                  Connectez-vous
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

