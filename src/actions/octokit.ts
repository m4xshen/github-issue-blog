'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Octokit } from 'octokit';
import { revalidatePath } from 'next/cache';
import octokit from '@/utils/octokit';

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

export async function createPost(formData: FormData) {
  const accessToken = cookies().get('access_token')?.value;
  if (!accessToken) {
    return null;
  }

  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  const userOctokit = new Octokit({ auth: accessToken });
  try {
    await userOctokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: process.env.NEXT_PUBLIC_OWNER,
      repo: process.env.NEXT_PUBLIC_REPO,
      title,
      body,
    });
  } catch (error) {
    console.error(error);
    return error;
  }

  revalidatePath('/');
  redirect('/');
}

export async function deletePost(issue_number: number) {
  const accessToken = cookies().get('access_token')?.value;
  if (!accessToken) {
    return null;
  }

  const userOctokit = new Octokit({ auth: accessToken });
  try {
    await userOctokit.request(
      'PATCH /repos/{owner}/{repo}/issues/{issue_number}',
      {
        owner: process.env.NEXT_PUBLIC_OWNER,
        repo: process.env.NEXT_PUBLIC_REPO,
        issue_number,
        state: 'closed',
      },
    );
  } catch (error) {
    console.error(error);
    return error;
  }

  revalidatePath('/');
  redirect('/');
}
