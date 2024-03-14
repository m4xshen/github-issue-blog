'use client';

import PostTitle from '@/components/PostTitle';
import usePosts from '@/hooks/usePosts';
import { Spinner } from '@nextui-org/spinner';
import { InView } from 'react-intersection-observer';

export default function Posts() {
  const { postsArr, error, isReachingEnd, nextPage } = usePosts();

  if (!postsArr || error) {
    return 'Error fetching posts. Please try again later.';
  }

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
      <InView
        onChange={(inView: boolean) => {
          if (!inView) {
            return;
          }

          nextPage();
        }}
      >
        {({ ref }) =>
          isReachingEnd ? null : <Spinner ref={ref} color="white" />
        }
      </InView>
    </>
  );
}
