import { useQuery } from '@tanstack/react-query';
import { PostsService } from '../repository';


export const useGetPosts = () => {
    return useQuery<any, Error, any>({
        queryKey: ['get posts'],
        queryFn: () => PostsService.getPost(),
    })
}