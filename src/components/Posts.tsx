'use client';

import PostTitle from '@/components/PostTitle';
import usePosts from '@/hooks/usePosts';
import { Button } from '@nextui-org/react';
import { Spinner } from '@nextui-org/spinner';

export default function Posts() {
  const { postsArr, error, isLoading, isReachingEnd, nextPage } = usePosts();

  if (isLoading) {
    return <Spinner />;
  }

  if (postsArr && !error) {
    return (
      <>
        {postsArr.map((posts) =>
          posts.map((post: any) => (
            <a
              key={post.number}
              href={`post/${post.number}`}
              aria-label="post title"
            >
              <PostTitle title={post.title} createdAt={post.created_at} />
            </a>
          )),
        )}
        {isReachingEnd ? null : <Button onPress={nextPage}>next page</Button>}
      </>
    );
  }

  return 'Error fetching posts. Please try again later.';
}
