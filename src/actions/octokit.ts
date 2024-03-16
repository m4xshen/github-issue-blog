'use server';

import octokit from '@/utils/octokit';

// eslint-disable-next-line import/prefer-default-export
export async function getPosts(page: number) {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: process.env.NEXT_PUBLIC_OWNER,
    repo: process.env.NEXT_PUBLIC_REPO,
    per_page: 10,
    page,
  });

  return data;
}
