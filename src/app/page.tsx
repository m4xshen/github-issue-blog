import Posts from '@/components/Posts';
import { getPosts } from '@/actions/octokit';

export default async function Home() {
  const data = await getPosts(1);

  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-10">
      <Posts data={data} />
    </div>
  );
}
