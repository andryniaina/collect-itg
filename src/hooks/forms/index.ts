import { getForms , findForm} from "../../services/form";
import { useQuery} from "@tanstack/react-query";

export const useForms = () => {
  return useQuery({queryKey: ["forms"], queryFn: getForms});
};

export const useFormId = (id: string) => {
  return useQuery({queryKey: ["form", id], queryFn: () => findForm(id)});
};