import Logo from "../../../../assets/icons/Logo.png";
import IconPreview from "../../../../assets/icons/IconePreview.svg";
import IconDeployement from "../../../../assets/icons/IconDeployement.svg";
import IconSupprimer from "../../../../assets/icons/IconSupprimer.svg";
import IconAjoutQuestion from "../../../../assets/icons/IconAjoutQuestion.svg";
import IconDuplicate from "../../../../assets/icons/IconeDuplicate.svg";
import IconParams from "../../../../assets/icons/IconeParams.svg";
import Dropdown from "../../../../assets/icons/Dropdown.svg";

const FormBuilder = () => {
  return (
    <main className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col  bg-white pb-3 gap-7">
        <div className="flex flex-row justify-between px-6 pt-6 items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <span className="font-semibold">TASKFORM</span>
            </div>
            <span className="text-sm">Formulaire A</span>
          </div>
          <div className="py-1 px-4 bg-gray-600 text-white rounded-sm text-xs items-start justify-center">
            <span>Sauvegarder</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <div>
            <img src={IconPreview} alt="Preview" className="w-5 h-5" />
          </div>
          <div>
            <img src={IconAjoutQuestion} alt="Preview" className="w-5 h-5" />
          </div>
          <div>
            <img src={IconDeployement} alt="Preview" className="w-5 h-5" />
          </div>
          <div>
            <img src={IconSupprimer} alt="Preview" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-4 gap-10">
        <div className="text-base font-semibold text-gray-700">
          Enquete agricole
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-400 rounded-sm"
            />
            <div className="flex flex-row w-[500px] h-[75px] border-2 border-gray-300 rounded-sm">
              <div className="w-1/12 border-r-2 border-gray-300 flex items-center justify-center text-xs text-gray-600">
                abc
              </div>
              <div className="flex flex-col justify-between py-2 px-1">
                <span className="text-sm">Nouvelle question</span>
                <span className="text-gray-400 text-xs">indice</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-400 rounded-sm"
            />
            <div className="flex flex-row w-[500px] min-h-[75px] border-2 border-gray-400 bg-gray-200 rounded-md p-4">
              <div className="flex flex-col w-full gap-3">
                <div className="flex flex-row items-center gap-3">
                  <img src={Dropdown} alt="Dropdown" className="w-3 h-3" />
                  <div>Groupe 01</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-400 rounded-sm"
                  />
                  <div className="flex flex-row w-full h-[75px] border-2 border-gray-300 rounded-sm bg-gray-100">
                    <div className="w-1/12 border-r-2 border-gray-300 flex items-center justify-center text-xs text-gray-600">
                      abc
                    </div>
                    <div className="flex flex-col justify-between py-2 px-1">
                      <span className="text-sm">Nouvelle question</span>
                      <span className="text-gray-400 text-xs">indice</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-400 rounded-sm"
                  />
                  <div className="flex flex-row w-full h-[75px] border-2 border-gray-300 rounded-sm bg-gray-100">
                    <div className="w-1/12 border-r-2 border-gray-300 flex items-center justify-center text-xs text-gray-600">
                      abc
                    </div>
                    <div className="flex flex-col justify-between py-2 px-1">
                      <span className="text-sm">Nouvelle question</span>
                      <span className="text-gray-400 text-xs">indice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormBuilder;
