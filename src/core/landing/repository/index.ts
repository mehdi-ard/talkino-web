import HttpService from "@/service";

class LandingServiceProvider extends HttpService {
  constructor() {
    super({ suffix: "web" });
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
    return this.httpService.get(`plan`);
  }

  public getDownload(): any {
    return this.httpService.get(`download`);
  }

  public getSocial(): any {
    return this.httpService.get(`social`);
  }
}

export const LandingService = new LandingServiceProvider();
