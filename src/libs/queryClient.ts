import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
      retry: 0,
      retryDelay: 3000,
      enabled: true,
    },
  },
});
