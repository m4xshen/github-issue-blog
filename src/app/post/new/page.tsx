'use client';

import { Textarea, Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { createPost } from '@/actions/post';
import { useFormStatus } from 'react-dom';
import { useState } from 'react';

function Publish({ isInvalid }: { isInvalid: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      radius="sm"
      color="primary"
      className="ml-auto"
      isDisabled={isInvalid}
      isLoading={pending}
    >
      Publish
    </Button>
  );
}

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleIsInvalid = title === '';
  const bodyIsInvalid = body.length < 30;

  return (
    <form
      className="prose prose-invert mx-auto mt-20 flex flex-col gap-6"
      action={createPost}
    >
      <Input
        name="title"
        value={title}
        onValueChange={setTitle}
        isInvalid={titleIsInvalid}
        errorMessage={titleIsInvalid && 'Title is required.'}
        placeholder="New post title here..."
        className="bg-transparent outline-none"
      />
      <Textarea
        value={body}
        onValueChange={setBody}
        isInvalid={bodyIsInvalid}
        errorMessage={
          bodyIsInvalid && 'Content must be at least 30 characters.'
        }
        name="body"
        radius="sm"
        size="lg"
        placeholder="Write your content here."
      />
      <Publish isInvalid={titleIsInvalid || bodyIsInvalid} />
    </form>
  );
}
