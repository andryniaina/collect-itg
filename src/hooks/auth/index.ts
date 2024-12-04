import { getMe } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

export const useUserProfile = () => {
  return useQuery({queryKey: ["userProfile"], queryFn: getMe});
};