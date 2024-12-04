import { getProjectForm } from "../../services/projectform.bdl";
import { useQuery} from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({queryKey: ["projectForm"], queryFn: getProjectForm});
};