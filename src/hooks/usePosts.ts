import { fetcher } from '@/actions/octokit';
import useSWRInfinite from 'swr/infinite';

const PAGE_SIZE = 10;

export function getKey(pageIndex: number, previousPageData: any) {
  // TODO: refine url construction
  const url = `GET /repos/${process.env.NEXT_PUBLIC_OWNER}/${process.env.NEXT_PUBLIC_REPO}/issues?per_page=${PAGE_SIZE}&page=${pageIndex + 1}`;

  if (previousPageData && !previousPageData.length) {
    return null;
  }

  return url;
}

export default function usePosts() {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  return {
    data,
    isReachingEnd,
    error,
    nextPage: () => setSize(size + 1),
  };
}
