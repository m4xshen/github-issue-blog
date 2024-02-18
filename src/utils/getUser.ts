import { cookies } from 'next/headers';

export default async function getUser() {
  try {
    const accessToken = cookies().get('access_token')?.value;
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user', error);
  }

  return null;
}
