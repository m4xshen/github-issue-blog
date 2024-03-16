import { getPost } from '@/actions/octokit';
import PostTitle from '@/components/PostTitle';
import Markdown from 'react-markdown';

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
