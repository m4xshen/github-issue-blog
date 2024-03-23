'use server';

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
  cookies().delete('access_token');
}
