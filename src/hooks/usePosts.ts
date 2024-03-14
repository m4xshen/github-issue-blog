import { fetcher, getKey } from '@/utils/octokit';
import useSWRInfinite from 'swr/infinite';

export default function usePosts() {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 10);

  return {
    data,
    isReachingEnd,
    error,
    nextPage: () => setSize(size + 1),
  };
}
