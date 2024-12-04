import { getForms } from "../../services/form.bdl";
import { useQuery} from "@tanstack/react-query";

export const useForms = () => {
  return useQuery({queryKey: ["forms"], queryFn: getForms});
};