import { redirect } from 'next/navigation';
import octokit from './octokit';

const owner = process.env.NEXT_PUBLIC_OWNER;
const repo = process.env.NEXT_PUBLIC_REPO;

export async function getPosts(page: number) {
  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      per_page: 10,
      page,
      labels: 'blog',
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

export async function getComments(issue_number: number) {
  try {
    const { data } = await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number,
    });

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
