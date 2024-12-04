import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Features */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Rejoignez une plateforme conçue pour vous aider à suivre vos données et vos projets en toute simplicité.
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {/* Security Feature */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Sécurité des données</p>
              </div>

              {/* Traceability Feature */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Traçabilité simplifiée</p>
              </div>

              {/* Accessibility Feature */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Accessibilité</p>
              </div>

              {/* Support Feature */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  {/* Placeholder for icon */}
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Support personnalisé</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Créer un compte</h1>
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Rakoto Nirina"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="rakotonirina@gmail.com"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="rakotonirina@gmail.com"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {/* Placeholder for eye icon */}
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {/* Placeholder for eye icon */}
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Créer un compte
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Déjà un compte?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Connectez-vous
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

