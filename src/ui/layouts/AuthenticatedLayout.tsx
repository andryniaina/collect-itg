import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const AuthenticatedLayout = () => {
  let location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setShowSidebar(location.pathname !== "/forms/create");
  }, [location]);

  return (
    <>
      <div className="flex h-screen">
        {showSidebar && <Sidebar />}
        <main className={`flex-1  ${showSidebar ? 'overflow-auto pt-10 pl-5 pr-5' : ''}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthenticatedLayout;
