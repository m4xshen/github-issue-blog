<div align="center">
  <h1>GitHub Issue Blog</h1>

  Use GitHub issue as your blog.
  
![screenshot](https://github.com/user-attachments/assets/4ec02823-dfd4-41d6-aa24-bc37f303cfd1)


  [🌐 Example Site](https://github-issue-blog.vercel.app)
  
[![Playwright Tests](https://github.com/m4xshen/github-issue-blog/actions/workflows/playwright.yml/badge.svg)](https://github.com/m4xshen/github-issue-blog/actions/workflows/playwright.yml)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=github-issue-blog)


</div>


## ✨ Features

- 🐱 Use GitHub issues as your blog storage
- 💬 Comment Section
- 📝 Create / Edit / Delete posts
- 🌓 Light / Dark theme
- 📱 RWD
- 🧑‍💻 Syntax Highlighting
- ♾️ Infinite scroll at home page
- 🔍 SEO Friendly

![lighthouse](https://github.com/m4xshen/github-issues-blog/assets/74842863/84c19d65-90f4-45e3-8100-ef81b60ad089)

## 🚀 Get started

1. Fork this repository
2. [Create a GitHub OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) with the callback URL: `your-site-domain/auth/callback`
3. Create a personal access token.
4. You can customize the blog with environment variables. Here's an example:

```
GITHUB_CLIENT_ID="your oauth app client id"
GITHUB_CLIENT_SECRET="your oauth app client secret"
GITHUB_TOKEN="your personal access token"
AUTHOR_NAME="Daniel"
BLOG_TITLE="Daniel's Blog"
BLOG_DESCRIPTION="Hi, I'm Daniel, a software engineer from Taiwan. Welcome to my blog!"
NEXT_PUBLIC_OWNER="m4xshen" (your GitHub username)
NEXT_PUBLIC_REPO="github-issue-blog" (the GitHub repository name that you want to store posts in)
```

If you plan to deploy your site...

- with Vercel: [add environment variables in settings](https://vercel.com/docs/projects/environment-variables)
- by yourself: copy above content to `.env.local`

5. Deploy the site and login to start blogging!

- with Vercel: [follow the docs](https://vercel.com/docs/deployments/overview)
- by yourself: `pnpm build && pnpm start` and check out http://localhost:3000

## ⭐ Star history

[![Star History Chart](https://app.repohistory.com/api/svg?repo=m4xshen/github-issue-blog&type=Date&theme=dark&transparent=false&color=FCE2C6)](https://app.repohistory.com/star-history)
