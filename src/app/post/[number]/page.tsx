import { Metadata } from 'next';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Comments from '@/components/Post/Comments';
import Actions from '@/components/Post/Actions';
import Title from '@/components/Post/Title';
import { getPost } from '@/utils/post';
import { isAuthor } from '@/utils/auth';

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
      <Title title={post.title} createdAt={post.created_at} />
      {(await isAuthor()) ? <Actions number={number} /> : null}
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
