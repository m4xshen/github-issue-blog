'use client';

import { Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { createPost } from '@/actions/post';
import { useFormStatus } from 'react-dom';

function Publish() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      radius="sm"
      color="primary"
      className="ml-auto"
      isLoading={pending}
    >
      Publish
    </Button>
  );
}

export default function NewPost() {
  return (
    <form
      className="prose prose-invert mx-auto mt-20 flex flex-col gap-6"
      action={createPost}
    >
      <h1>
        <input
          name="title"
          placeholder="New post title here..."
          className="bg-transparent outline-none"
        />
      </h1>
      <Textarea
        name="body"
        radius="sm"
        size="lg"
        placeholder="Write your content here."
      />
      <Publish />
    </form>
  );
}
