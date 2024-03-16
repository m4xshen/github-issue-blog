import { getUser, getPost } from '@/actions/octokit';
import PostActions from '@/components/PostActions';
import PostTitle from '@/components/PostTitle';
import Markdown from 'react-markdown';

export default async function Post({ params }: { params: { number: string } }) {
  const number = parseInt(params.number, 10);
  const post = await getPost(number);
  const user = await getUser();

  return (
    <div className="mx-auto mt-20 grid w-max gap-6">
      <PostTitle title={post.title} createdAt={post.created_at} />
      {user ? <PostActions number={number} /> : null}
      <div className="prose prose-invert">
        <Markdown>{post.body}</Markdown>
      </div>
    </div>
  );
}
