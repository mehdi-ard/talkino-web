import HttpService from "@/service";


class PostsServiceProvider extends HttpService {
    constructor() {
        super({ suffix: "web" });
    }

    public getPost(): any {
        return this.httpService.get(`blog`);
    }

    public getOnePost(id:string): any {
        return this.httpService.get(`blog/${id}`);
    }

}

export const PostsService = new PostsServiceProvider();