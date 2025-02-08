import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default async function MarkdownWrapper({
  children,
}: {
  children: string | null | undefined;
}) {
  return (
    <Markdown
      components={{
        // eslint-disable-next-line react/no-unstable-nested-components
        code(props) {
          const { children: c, className } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <div className="max-w-[80vw]">
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                style={oneDark}
              >
                {String(c).replace(/\n$/, '')}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code className={className}>{c}</code>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
}
