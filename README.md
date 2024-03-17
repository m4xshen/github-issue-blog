<div align="center">
  <h1>GitHub Issues Blog</h1>

  Use GitHub issues as blog.

  Example Site: https://github-issue-blog.vercel.app
</div>

![screenshot](https://github.com/m4xshen/github-issues-blog/assets/74842863/33e3429b-0346-48c1-987d-5f4e4b4103f1)


## Features

- Use GitHub issues as your blog storage
- Infinite scroll at home page
- Create / Edit / Delete posts
- SEO Friendly
- Light/Dark theme
- RWD

![lighthouse](https://github.com/m4xshen/github-issues-blog/assets/74842863/84c19d65-90f4-45e3-8100-ef81b60ad089)

## Get started

1. Fork this repository
2. [Create a GitHub OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

> [!NOTE]
> The OAuth app supports up to [15,000 requests per hour](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#primary-rate-limit-for-oauth-apps), significantly surpassing the [60 requests per hour](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#primary-rate-limit-for-unauthenticated-users) limit for unauthenticated requests. This increased capacity enables a higher volume of page views for your site.
3. Customize the blog with following environment variables:

```
GITHUB_CLIENT_ID="your oauth app client id"
GITHUB_CLIENT_SECRET="your oauth app client secret"
AUTHOR_NAME="your name"
BLOG_TITLE="title of your blog"
BLOG_DESCRIPTION="description of your blog"
NEXT_PUBLIC_OWNER="your github username"
NEXT_PUBLIC_REPO="name of your forked repository"
```

If you plan to host your site...
- locally: copy above content to `.env.local`
- with Vercel: [add environment variables in settings](https://vercel.com/docs/projects/environment-variables)

Make sure you change the value inside `""`.

4. Deploy the site and you can now sign in to your blog to start blogging!
