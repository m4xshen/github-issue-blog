import PostTitle from '@/components/PostTitle';
import octokit from '@/utils/octokit';
import Markdown from 'react-markdown';

async function getPost(issue_number: number) {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}',
    {
      owner: process.env.NEXT_PUBLIC_OWNER,
      repo: process.env.NEXT_PUBLIC_REPO,
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
      <PostTitle title={post.title} createdAt={post.created_at} />
      <div className="prose prose-invert">
        <Markdown>{post.body}</Markdown>
      </div>
    </div>
  );
}
