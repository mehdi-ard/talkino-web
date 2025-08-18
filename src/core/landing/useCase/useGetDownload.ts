import { useQuery } from "@tanstack/react-query";
import { LandingService } from "../repository";
import type { Download } from "@/types/landing";

export const useGetDownload = () => {
  return useQuery<Array<Download>, Error>({
    queryKey: ["get download"],
    queryFn: () => LandingService.getDownload(),
  });
};
