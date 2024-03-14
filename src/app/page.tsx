import Posts from '@/components/Posts';
import { fetcher } from '@/actions/octokit';
import { unstable_serialize } from 'swr/infinite';
import { getKey } from '@/hooks/usePosts';
import { SWRProvider } from './providers';

export default async function Home() {
  const url = getKey(0, null);
  const data = await fetcher(url!);

  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-10">
      <SWRProvider
        value={{
          fallback: {
            [unstable_serialize(() => getKey(0, null))]: [data],
          },
        }}
      >
        <Posts />
      </SWRProvider>
    </div>
  );
}
