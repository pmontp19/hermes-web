import { ContentFrontmatter } from "@/lib/markdown"

interface MarkdownContentProps {
  frontmatter: ContentFrontmatter
  htmlContent: string
  type: 'solution' | 'industry'
}

export const MarkdownContent = ({
  frontmatter,
  htmlContent,
  type
}: MarkdownContentProps) => {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {frontmatter.description}
          </p>
        )}
      </header>
      
      <article className="prose prose-lg md:prose-xl max-w-4xl mx-auto">
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      <div className="mt-12 text-center">
        <a
          href={`/${type === 'industry' ? 'industries' : 'solutions'}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
        >
          <span aria-hidden="true">←</span>
          <span className="ml-2">Back to {type === 'industry' ? 'Industries' : 'Solutions'}</span>
        </a>
      </div>
    </main>
  )
}
