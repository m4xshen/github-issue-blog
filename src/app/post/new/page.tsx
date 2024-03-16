import { createPost } from '@/actions/post';
import PostEditor from '@/components/PostEditor/index';

export default function NewPost() {
  return (
    <PostEditor
      initTitle=""
      initBody=""
      actionName="Publish"
      action={createPost}
    />
  );
}
