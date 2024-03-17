import { getUser } from '@/actions/auth';
import { getPost } from '@/actions/post';
import PostActions from '@/components/PostActions';
import PostTitle from '@/components/PostTitle';
import { Metadata } from 'next';
import Markdown from 'react-markdown';

export async function generateMetadata({
  params,
}: {
  params: { number: string };
}): Promise<Metadata> {
  const number = parseInt(params.number, 10);
  const post = await getPost(number);

  return {
    title: `${post.title} | ${process.env.BLOG_TITLE}`,
  };
}

export default async function Post({ params }: { params: { number: string } }) {
  const number = parseInt(params.number, 10);
  const post = await getPost(number);
  const user = await getUser();

  return (
    <div className="mx-auto  grid max-w-[65ch] gap-6">
      <PostTitle title={post.title} createdAt={post.created_at} />
      {user ? <PostActions number={number} /> : null}
      <div className="prose prose-invert">
        <Markdown>{post.body}</Markdown>
      </div>
    </div>
  );
}
