'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Octokit } from 'octokit';
import { revalidatePath } from 'next/cache';
import octokit from '@/utils/octokit';

const owner = process.env.NEXT_PUBLIC_OWNER;
const repo = process.env.NEXT_PUBLIC_REPO;

export async function getPosts(page: number) {
  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
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
    const { data } = await octokit.rest.issues.get({
      owner,
      repo,
      issue_number,
    });

    if (data.state === 'closed') {
      throw new Error('Post is deleted');
    }

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
  let issueNumber = null;

  try {
    const { data } = await userOctokit.rest.issues.create({
      owner,
      repo,
      title,
      body,
    });
    issueNumber = data.number;
  } catch (error) {
    console.error(error);
    return error;
  }

  revalidatePath('/');
  redirect(`/post/${issueNumber}?success=Post created successfully`);
}

export async function updatePost(issue_number: number, formData: FormData) {
  const accessToken = cookies().get('access_token')?.value;
  if (!accessToken) {
    return null;
  }

  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  const userOctokit = new Octokit({ auth: accessToken });
  try {
    await userOctokit.rest.issues.update({
      owner,
      repo,
      issue_number,
      title,
      body,
    });
  } catch (error) {
    console.error(error);
    return error;
  }

  revalidatePath('/');
  revalidatePath('/post/edit');
  revalidatePath(`/post/${issue_number}`);
  redirect(`/post/${issue_number}?success=Post updated successfully`);
}

export async function deletePost(issue_number: number) {
  const accessToken = cookies().get('access_token')?.value;
  if (!accessToken) {
    return null;
  }

  const userOctokit = new Octokit({ auth: accessToken });
  try {
    await userOctokit.rest.issues.update({
      owner,
      repo,
      issue_number,
      state: 'closed',
    });
  } catch (error) {
    console.error(error);
    return error;
  }

  revalidatePath('/');
  redirect('/?success=Post deleted successfully');
}
