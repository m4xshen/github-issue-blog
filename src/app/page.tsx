import { Octokit } from 'octokit';

const octokit = new Octokit({});

export default async function Home() {
  const { data: posts } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues',
    {
      owner: process.env.OWNER,
      repo: process.env.REPO,
    },
  );

  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-10">
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <div className="mb-5 text-sm text-[#ffffffa0]">
            {new Date(post.created_at).toDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}
