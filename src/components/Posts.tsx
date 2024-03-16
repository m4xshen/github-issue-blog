'use client';

import PostTitle from '@/components/PostTitle';
import usePosts from '@/hooks/usePosts';
import { Spinner } from '@nextui-org/spinner';
import { InView } from 'react-intersection-observer';

export default function Posts({ data }: { data: any[] }) {
  const { posts, noMorePosts, loadMore } = usePosts(data);

  return (
    <>
      {posts.map((post: any) => (
        <a key={post.id} href={`post/${post.number}`} aria-label="post title">
          <PostTitle title={post.title} createdAt={post.created_at} />
        </a>
      ))}
      <InView
        onChange={(inView: boolean) => {
          if (!inView) {
            return;
          }

          loadMore();
        }}
      >
        {({ ref }) =>
          noMorePosts ? null : <Spinner ref={ref} color="white" />
        }
      </InView>
    </>
  );
}
