/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { exchangeCodeForAccessToken } from '@/utils/auth';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const pathname = searchParams.get('state');

  if (code) {
    const { error } = await exchangeCodeForAccessToken(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${pathname}`);
    }
  }

  return NextResponse.redirect(
    `${origin}${pathname}?error=Access denied. Please try again.`,
  );
}
