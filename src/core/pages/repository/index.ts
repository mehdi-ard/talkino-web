import HttpService from "@/service";


class PagesServiceProvider extends HttpService {
    constructor() {
        super({ suffix: "web/pages" });
    }

    public getPage(slug: string): any {
        return this.httpService.get(`slug/${slug}`);
    }

}

export const PagesService = new PagesServiceProvider();