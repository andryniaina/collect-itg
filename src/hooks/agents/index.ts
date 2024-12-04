import { getUsers } from "../../services/user";
import { useQuery} from "@tanstack/react-query";

export const useAgents = () => {
  return useQuery({queryKey: ["users"], queryFn: getUsers});
};