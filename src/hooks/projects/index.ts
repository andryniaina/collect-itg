import { getProject } from "../../services/project";
import { useQuery} from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({queryKey: ["projects"], queryFn: getProject});
};