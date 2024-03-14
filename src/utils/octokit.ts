import { OAuthApp } from 'octokit';

const { octokit } = new OAuthApp({
  clientType: 'oauth-app',
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export async function fetcher(url: string) {
  const { data } = await octokit.request(url);
  return data;
}

export function getKey(pageIndex: number, previousPageData: any) {
  // TODO: refine url construction
  const url = `GET /repos/${process.env.NEXT_PUBLIC_OWNER}/${process.env.NEXT_PUBLIC_REPO}/issues?per_page=10&page=${pageIndex + 1}`;

  if (previousPageData && !previousPageData.length) {
    return null;
  }

  return url;
}

export default octokit;
