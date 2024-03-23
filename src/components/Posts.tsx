'use client';

import Title from '@/components/Post/Title';
import usePosts from '@/hooks/usePosts';
import { Link } from '@nextui-org/react';
import { Spinner } from '@nextui-org/spinner';
import { InView } from 'react-intersection-observer';

export default function Posts({ data }: { data: any[] }) {
  const { posts, noMorePosts, loadMore } = usePosts(data);

  return (
    <div className="flex flex-col gap-12">
      {posts.map((post: any) => (
        <Link key={post.id} href={`post/${post.number}`}>
          <Title title={post.title} createdAt={post.created_at} />
        </Link>
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
          noMorePosts ? null : (
            <Spinner ref={ref} color="primary" role="status" />
          )
        }
      </InView>
    </div>
  );
}
