/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import exchangeCodeForAccessToken from '@/utils/auth';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const { error } = await exchangeCodeForAccessToken(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
