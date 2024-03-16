import { getPosts } from '@/actions/octokit';
import { useState } from 'react';

export default function usePosts(initPosts: any[]) {
  const [posts, setPosts] = useState(initPosts);
  const [page, setPage] = useState(2);
  const [noMorePosts, setNoMorePosts] = useState(false);

  async function loadMore() {
    const morePosts = await getPosts(page);
    setPosts([...posts, ...morePosts]);
    setPage(page + 1);

    if (morePosts.length < 10) {
      setNoMorePosts(true);
    }
  }

  return {
    posts,
    noMorePosts,
    loadMore,
  };
}