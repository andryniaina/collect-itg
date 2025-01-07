import { getProjects , findProject } from "../../services/project";
import { useQuery} from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({queryKey: ["projects"], queryFn: getProjects});
};

export const useProject = (id: string) => {
  return useQuery({queryKey: ["project", id], queryFn: () => findProject(id)});
};