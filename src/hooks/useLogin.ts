export default function useLogin() {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.append(
    'client_id',
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
  );
  url.searchParams.append('scope', 'repo');

  return {
    url,
  };
}
