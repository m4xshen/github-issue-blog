import { useState } from 'react';
import { getPosts } from '@/utils/post';
import { Issues } from '@/types';

const perPage = 10;

export default function usePosts(initPosts: Issues = []) {
  const [posts, setPosts] = useState<Issues>(initPosts);
  const [page, setPage] = useState(initPosts.length < perPage ? 1 : 2);
  const [noMorePosts, setNoMorePosts] = useState(initPosts.length < perPage);

  async function loadMore() {
    const morePosts = await getPosts(page);
    setPosts([...posts, ...morePosts]);
    setPage(page + 1);

    if (morePosts.length < perPage) {
      setNoMorePosts(true);
    }
  }

  return {
    posts,
    noMorePosts,
    loadMore,
  };
}
