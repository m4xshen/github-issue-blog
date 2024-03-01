import octokit from '@/utils/octokit';

async function getPost(issue_number: number) {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}',
    {
      owner: process.env.OWNER,
      repo: process.env.REPO,
      issue_number,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );
  return data;
}

export default async function Post({ params }: { params: { number: string } }) {
  const post = await getPost(parseInt(params.number, 10));
  return (
    <div className="mx-auto mt-20 grid w-max gap-6">
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="text-sm text-gray-400">
          {new Date(post.created_at).toDateString()}
        </div>
      </div>
      <div className="prose prose-invert">{post.body}</div>
    </div>
  );
}
