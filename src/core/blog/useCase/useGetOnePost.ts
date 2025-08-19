import { useQuery } from '@tanstack/react-query';
import { PostsService } from '../repository';
import type { Post } from '@/types';


export const useGetOnePost = (id:string) => {
    return useQuery<any, Error, Post>({
        queryKey: ['get post',id],
        queryFn: () => PostsService.getOnePost(id),
    })
}