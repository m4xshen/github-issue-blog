import { Metadata } from 'next';
import CommentsSection from '@/components/Post/CommentsSection';
import Actions from '@/components/Post/Actions';
import Title from '@/components/Post/Title';
import MarkdownWrapper from '@/components/Post/MarkdownWrapper';
import { getPost } from '@/utils/post';
import { isAuthor } from '@/utils/auth';

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

  return (
    <div className="mx-auto grid max-w-[65ch] gap-6">
      <Title title={post.title} createdAt={post.created_at} />
      {(await isAuthor()) ? <Actions number={number} /> : null}
      <div className="prose dark:prose-invert prose-pre:bg-[#282c34]">
        <MarkdownWrapper>{post.body}</MarkdownWrapper>
        <hr />
        <CommentsSection number={number} />
      </div>
    </div>
  );
}
