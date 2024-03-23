/* eslint-disable react/jsx-props-no-spreading */
import { isAuthor } from '@/utils/auth';
import Comments from '@/components/Comments';
import PostActions from '@/components/PostActions';
import PostTitle from '@/components/PostTitle';
import { getPost } from '@/utils/post';
import { Metadata } from 'next';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export async function generateMetadata({
  params,
}: {
  params: { number: string };
}): Promise<Metadata> {
  const number = parseInt(params.number, 10);
  const post = await getPost(number);

  return {
    title: `${post.title} | ${process.env.BLOG_TITLE}`,
  };
}

export default async function Post({ params }: { params: { number: string } }) {
  const number = parseInt(params.number, 10);
  const post = await getPost(number);

  return (
    <div className="mx-auto  grid max-w-[65ch] gap-6">
      <PostTitle title={post.title} createdAt={post.created_at} />
      {(await isAuthor()) ? <PostActions number={number} /> : null}
      <div className="prose dark:prose-invert prose-pre:bg-[#282c34]">
        <Markdown
          components={{
            code(props) {
              const { children, className } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={oneDark}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className}>{children}</code>
              );
            },
          }}
        >
          {post.body}
        </Markdown>
        <Comments number={number} />
      </div>
    </div>
  );
}
