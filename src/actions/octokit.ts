'use server';

import octokit from '@/utils/octokit';

// eslint-disable-next-line import/prefer-default-export
export async function fetcher(url: string) {
  const { data } = await octokit.request(url);
  return data;
}
