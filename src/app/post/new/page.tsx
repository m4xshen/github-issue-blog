import { isAuthor } from '@/actions/auth';
import { createPost } from '@/actions/post';
import PostEditor from '@/components/PostEditor/index';
import { redirect } from 'next/navigation';

export default async function NewPost() {
  if (!(await isAuthor())) {
    redirect('/');
  }

  return (
    <PostEditor
      initTitle=""
      initBody=""
      actionName="Publish"
      action={createPost}
    />
  );
}
