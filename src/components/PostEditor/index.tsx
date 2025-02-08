'use client';

import { useState } from 'react';
import { Textarea, Input } from "@heroui/input";
import Submit from './Submit';

export default function PostEditor({
  initTitle,
  initBody,
  actionName,
  action,
}: {
  initTitle: string;
  initBody: string;
  actionName: string;
  action: (formData: FormData) => Promise<any>;
}) {
  const [title, setTitle] = useState(initTitle);
  const [body, setBody] = useState(initBody);

  const titleIsInvalid = title === '';
  const bodyIsInvalid = body.length < 30;

  return (
    <form
      className="prose prose-invert mx-auto flex flex-col gap-6"
      action={action}
    >
      <Input
        name="title"
        value={title}
        onValueChange={setTitle}
        isInvalid={titleIsInvalid}
        errorMessage={titleIsInvalid && 'Title is required.'}
        placeholder="New post title here..."
        classNames={{
          inputWrapper:
            'data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent bg-transparent outline-none p-0',
          input: '!text-primary font-bold text-3xl',
        }}
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
        classNames={{
          inputWrapper:
            'border border-secondary data-[hover=true]:bg-background group-data-[focus=true]:bg-background bg-background',
          input: '!text-primary',
        }}
      />
      <Submit isInvalid={titleIsInvalid || bodyIsInvalid}>{actionName}</Submit>
    </form>
  );
}
