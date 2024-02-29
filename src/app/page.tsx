import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Octokit } from 'octokit';

async function getPosts() {
  const auth = cookies().get('access_token')?.value;
  const octokit = new Octokit(auth ? { auth } : {});

  const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-5">
      {posts.map((post) => (
        <Card
          key={post.number}
          as={Link}
          href={`post/${post.number}`}
          className="bg-transparent"
        >
          <CardHeader className="text-2xl font-semibold">
            {post.title}
          </CardHeader>
          <CardFooter className="text-sm text-[#ffffffa0]">
            {new Date(post.created_at).toDateString()}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
