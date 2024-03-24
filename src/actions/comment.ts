'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { Octokit } from 'octokit';

const owner = process.env.NEXT_PUBLIC_OWNER;
const repo = process.env.NEXT_PUBLIC_REPO;

// eslint-disable-next-line import/prefer-default-export
export async function createComment(issue_number: number, formData: FormData) {
  const accessToken = cookies().get('access_token')?.value;
  if (!accessToken) {
    return null;
  }

  const body = formData.get('body') as string;

  const userOctokit = new Octokit({ auth: accessToken });
  try {
    await userOctokit.rest.issues.createComment({
      owner,
      repo,
      issue_number,
      body,
    });

    revalidatePath(`/post/${issue_number}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}
