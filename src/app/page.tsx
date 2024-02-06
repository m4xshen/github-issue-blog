import { cookies } from 'next/headers';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function Home() {
  const loginUrl = new URL('https://github.com/login/oauth/authorize');
  loginUrl.searchParams.append(
    'client_id',
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
  );
  loginUrl.searchParams.append('scope', 'repo');

  return (
    <div className="mt-20 flex h-full flex-col items-center justify-center gap-10">
      {cookies().has('access_token') ? 'Logged in' : 'Not logged in'}
      <Button as={Link} href={loginUrl.href}>
        Login
      </Button>
    </div>
  );
}
