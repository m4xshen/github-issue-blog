import { getUser } from '@/utils/auth';
import CommentCreator from './CommentCreator';
import Comments from './Comments';

export default async function CommentsSection({ number }: { number: number }) {
  const user = await getUser();

  return (
    <>
      <h2>Comments</h2>
      <div className="grid gap-5">
        <Comments number={number} />
        <CommentCreator number={number} user={user} />
      </div>
    </>
  );
}
