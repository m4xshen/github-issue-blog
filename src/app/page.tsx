import Posts from '@/components/Posts';
import { getPosts, getUser } from '@/actions/octokit';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default async function Home() {
  const data = await getPosts(1);
  const user = await getUser();

  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-10">
      {user ? (
        <Button as={Link} href="/post/new" radius="sm" color="primary">
          New Post
        </Button>
      ) : null}
      <Posts data={data} />
    </div>
  );
}
