import { useQuery } from "@tanstack/react-query";
import { LandingService } from "../repository";
import type { Feature } from "@/types/landing";

export const useGetFeature = () => {
  return useQuery<Array<Feature>, Error>({
    queryKey: ["get feature"],
    queryFn: () => LandingService.getFeature(),
  });
};
