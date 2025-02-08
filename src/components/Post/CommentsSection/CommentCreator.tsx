'use client';

import { createComment } from '@/actions/comment';
import Submit from '@/components/PostEditor/Submit';
import { User } from '@/types';
import { Textarea } from '@heroui/react';
import { useState } from 'react';

export default function CommentCreator({
  number,
  user,
}: {
  number: number;
  user: User | null;
}) {
  const [body, setBody] = useState('');
  const bodyIsInvalid = body === '';

  return (
    <form
      action={async (formData) => {
        await createComment(number, formData);
        setBody('');
      }}
      className="flex flex-col gap-3"
    >
      <Textarea
        value={body}
        onValueChange={setBody}
        isDisabled={!user}
        name="body"
        radius="sm"
        size="lg"
        placeholder={user ? 'Write your comment here.' : 'Log in to comment.'}
        classNames={{
          inputWrapper:
            'border border-secondary data-[hover=true]:bg-background group-data-[focus=true]:bg-background bg-background',
          input: '!text-primary',
        }}
      />
      <Submit isInvalid={bodyIsInvalid}>Comment</Submit>
    </form>
  );
}
