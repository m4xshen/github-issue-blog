import { OAuthApp } from 'octokit';

const { octokit } = new OAuthApp({
  clientType: 'oauth-app',
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

export default octokit;
