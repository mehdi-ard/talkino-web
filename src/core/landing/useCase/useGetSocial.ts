import { useQuery } from "@tanstack/react-query";
import { LandingService } from "../repository";
import type { Social } from "@/types/landing";

export const useGetSocial = () => {
  return useQuery<Array<Social>, Error>({
    queryKey: ["get social"],
    queryFn: () => LandingService.getSocial(),
  });
};
