'use server';

import { redirect } from 'next/navigation';

/* eslint-disable import/prefer-default-export */
export async function login() {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.append(
    'client_id',
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
  );
  url.searchParams.append('scope', 'repo');

  redirect(url.toString());
}
