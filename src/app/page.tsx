import PostTitle from '@/components/PostTitle';
import octokit from '@/utils/octokit';

async function getPosts() {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="mx-auto mt-20 flex h-full w-max flex-col justify-center gap-10">
      {posts.map((post) => (
        <a
          key={post.number}
          href={`post/${post.number}`}
          aria-label="post title"
        >
          <PostTitle title={post.title} createdAt={post.created_at} />
        </a>
      ))}
    </div>
  );
}
