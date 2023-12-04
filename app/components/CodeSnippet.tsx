
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ className, language, children }) => {
    
  return (
    <SyntaxHighlighter className={className} language={language} style={vscDarkPlus}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
