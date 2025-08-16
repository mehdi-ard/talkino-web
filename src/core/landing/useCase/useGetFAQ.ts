import { useQuery } from "@tanstack/react-query";
import { LandingService } from "../repository";
import type { FAQ } from "@/types/landing";

export const useGetFaq = () => {
  return useQuery<Array<FAQ>, Error>({
    queryKey: ["get faq"],
    queryFn: () => LandingService.useGetFaq(),
  });
};
