import { Avatar, Link } from '@nextui-org/react';
import { getComments } from '@/utils/post';

export default async function Comments({ number }: { number: number }) {
  const comments = await getComments(number);

  if (!comments.length) {
    return (
      <>
        <hr />
        <h2>Comments</h2>
        <div>There are no comments yet.</div>
      </>
    );
  }

  return (
    <>
      <hr />
      <h2>Comments</h2>
      <div className="grid gap-5">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar src={comment.user?.avatar_url} />
            <div className="grid w-full gap-3">
              <div className="flex items-center gap-3">
                <Link href={comment.user?.html_url}>
                  @{comment.user?.login}{' '}
                </Link>
                <span className="text-sm">
                  {new Date(comment.created_at).toDateString()}
                </span>
              </div>
              <div className="rounded-xl border border-secondary p-5">
                {comment.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
