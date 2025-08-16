import { useQuery } from "@tanstack/react-query";
import { LandingService } from "../repository";
import type { Testimonial } from "@/types/landing";

export const useGetTestimonial = () => {
  return useQuery<Array<Testimonial>, Error>({
    queryKey: ["get testimonial"],
    queryFn: () => LandingService.getTestimonial(),
  });
};
