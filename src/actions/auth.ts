'use server';

import { Octokit } from 'octokit';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(pathname: string) {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.append('client_id', process.env.GITHUB_CLIENT_ID);
  url.searchParams.append('scope', 'repo');
  url.searchParams.append('state', pathname);

  redirect(url.toString());
}

export async function logOut() {
  const cookieStore = cookies();
  cookieStore.delete('access_token');
}

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

export async function isAuthor() {
  const user = await getUser();
  return user?.login === process.env.NEXT_PUBLIC_OWNER;
}
