const FormBuilder = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <span className="text-lg font-semibold">TASKFORM</span>
          <span className="text-lg font-normal text-gray-500">Formulaire A</span>
        </div>
        <button className="px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800">
          Sauvegarder
        </button>
      </div>

      {/* Icons in center */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-gray-300"></div>
          <div className="w-6 h-6 bg-gray-300"></div>
          <div className="w-6 h-6 bg-gray-300"></div>
        </div>
      </div>

      {/* Form title */}
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold">Enquête agricole</h2>
      </div>

      {/* Form Questions */}
      <div className="max-w-3xl mx-auto mt-8">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center mb-6 bg-white p-4 rounded-md shadow-sm">
            {/* Checkbox */}
            <div className="w-6 h-6 border-2 border-gray-400 rounded mr-4"></div>

            {/* Icon */}
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center mr-4 rounded-md">
              <span className="text-sm">abc</span>
            </div>

            {/* Input fields */}
            <div className="flex-1">
              <input
                type="text"
                className="w-full p-2 mb-2 text-gray-900 border border-gray-300 rounded focus:outline-none"
                placeholder="Nouvelle question"
              />
              <input
                type="text"
                className="w-full p-2 text-gray-400 border border-gray-300 rounded focus:outline-none"
                placeholder="Indice"
              />
            </div>

            {/* Action icons */}
            <div className="flex space-x-4 ml-4">
              <div className="w-6 h-6 bg-gray-300"></div>
              <div className="w-6 h-6 bg-gray-300"></div>
              <div className="w-6 h-6 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
