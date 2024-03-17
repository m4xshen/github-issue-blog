import { isAuthor } from '@/actions/auth';
import { redirect } from 'next/navigation';
import { getPost, updatePost } from '@/actions/post';
import PostEditor from '@/components/PostEditor/index';

export default async function EditPost({
  searchParams,
}: {
  searchParams: { number: string };
}) {
  if (!(await isAuthor())) {
    redirect('/');
  }

  const number = parseInt(searchParams.number, 10);
  const post = await getPost(number);

  return (
    <PostEditor
      initTitle={post.title}
      initBody={post.body!}
      actionName="Update"
      action={updatePost.bind(null, number)}
    />
  );
}
