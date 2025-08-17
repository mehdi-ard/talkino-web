import { useQuery } from "@tanstack/react-query";
import { LandingService } from "../repository";
import type { Plan } from "@/types/landing";

export const useGetPlans = () => {
  return useQuery<Array<Plan>, Error>({
    queryKey: ["get plan"],
    queryFn: () => LandingService.getPlans(),
  });
};
