'use client';

import { InView } from 'react-intersection-observer';
import { Link } from "@heroui/link";
import { Spinner } from "@heroui/spinner";
import Title from '@/components/Post/Title';
import usePosts from '@/hooks/usePosts';
import { Issues } from '@/types';

export default function Posts({ data }: { data: Issues }) {
  const { posts, noMorePosts, loadMore } = usePosts(data);

  return (
    <div className="flex flex-col gap-12">
      {posts.map((post) => (
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
