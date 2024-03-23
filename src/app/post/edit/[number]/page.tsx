import { redirect } from 'next/navigation';
import PostEditor from '@/components/PostEditor/index';
import { updatePost } from '@/actions/post';
import { getPost } from '@/utils/post';
import { isAuthor } from '@/utils/auth';

export default async function EditPost({
  params,
}: {
  params: { number: string };
}) {
  const number = parseInt(params.number, 10);
  const post = await getPost(number);

  if (!(await isAuthor()) || !number) {
    redirect('/');
  }

  return (
    <PostEditor
      initTitle={post.title}
      initBody={post.body!}
      actionName="Update"
      action={updatePost.bind(null, number)}
    />
  );
}
