import HttpService from "@/service";

class LandingServiceProvider extends HttpService {
  constructor() {
    super({ suffix: "" });
  }
  public getTestimonial(): any {
    return this.httpService.get(`testimonial`);
  }

  public getFeature(): any {
    return this.httpService.get(`feature`);
  }

  public useGetFaq(): any {
    return this.httpService.get(`faq`);
  }

  public getPlans(): any {
    return this.httpService.get(`plans`);
  }
}

export const LandingService = new LandingServiceProvider();
