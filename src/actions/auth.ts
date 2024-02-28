'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login() {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.append('client_id', process.env.GITHUB_CLIENT_ID);
  url.searchParams.append('scope', 'repo');

  redirect(url.toString());
}

export async function logOut() {
  const cookieStore = cookies();
  cookieStore.delete('access_token');

  redirect('/');
}
