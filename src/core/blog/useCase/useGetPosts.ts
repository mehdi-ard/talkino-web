import { useQuery } from '@tanstack/react-query';
import { PostsService } from '../repository';
import type { Post } from 'ogl';


export const useGetPosts = () => {
    return useQuery<any, Error, any>({
        queryKey: ['get posts'],
        queryFn: () => PostsService.getPost(),
    })
}