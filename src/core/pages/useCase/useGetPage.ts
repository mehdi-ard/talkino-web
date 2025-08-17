import { useQuery } from '@tanstack/react-query';
import { PagesService } from '../repository';


export const useGetPageSlug = (slug: string) => {
    return useQuery<any, Error, any>({
        queryKey: ['page', slug],
        queryFn: () => PagesService.getPage(slug),
    })
}