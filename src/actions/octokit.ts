'use server';

import { cookies } from 'next/headers';
import octokit from '@/utils/octokit';
import { Octokit } from 'octokit';
import { redirect } from 'next/navigation';

export async function getUser() {
  const accessToken = cookies().get('access_token')?.value;
  if (!accessToken) {
    return null;
  }

  const userOctokit = new Octokit({ auth: accessToken });
  try {
    const { data } = await userOctokit.rest.users.getAuthenticated();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPosts(page: number) {
  try {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: process.env.NEXT_PUBLIC_OWNER,
      repo: process.env.NEXT_PUBLIC_REPO,
      per_page: 10,
      page,
    });

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPost(issue_number: number) {
  try {
    const { data } = await octokit.request(
      'GET /repos/{owner}/{repo}/issues/{issue_number}',
      {
        owner: process.env.NEXT_PUBLIC_OWNER,
        repo: process.env.NEXT_PUBLIC_REPO,
        issue_number,
      },
    );

    return data;
  } catch (error) {
    console.error(error);
    redirect('/');
  }
}
