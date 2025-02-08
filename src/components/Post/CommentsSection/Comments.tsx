import { Avatar, Link } from "@heroui/react";
import { getComments } from '@/utils/post';
import MarkdownWrapper from '../MarkdownWrapper';

export default async function Comments({ number }: { number: number }) {
  const comments = await getComments(number);

  if (!comments.length) {
    return <div>There are no comments yet.</div>;
  }

  return comments.map((comment) => (
    <div key={comment.id} className="flex gap-3">
      <Avatar src={comment.user?.avatar_url} className="flex-shrink-0" />
      <div className="grid w-full gap-3">
        <div className="flex items-center gap-3">
          <Link href={comment.user?.html_url}>@{comment.user?.login}</Link>
          <span className="text-sm">
            {new Date(comment.created_at).toDateString()}
          </span>
        </div>
        <div className="prose rounded-xl border border-secondary p-5 dark:prose-invert">
          <MarkdownWrapper>{comment.body}</MarkdownWrapper>
        </div>
      </div>
    </div>
  ));
}
