import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  Agents,
  Datas,
  Forms,
  Projects,
  ProjectDetails,
  FormBuilder,
  Results,
} from "../ui/pages";
import AuthenticatedLayout from "../ui/layouts/AuthenticatedLayout";
import Login from "../ui/pages/Login/Login";
import Register from "../ui/pages/Register/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticatedLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/data" element={<Datas />} />
        <Route path="/data/results" element={<Results />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms/create" element={<FormBuilder />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
