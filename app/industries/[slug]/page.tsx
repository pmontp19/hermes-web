import { getMarkdownBySlug, getMarkdownFiles } from '@/lib/markdown'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type IndustryPageProps = {
  readonly params: Promise<{
    slug: string
  }>
}

export const generateMetadata = async ({
  params
}: IndustryPageProps): Promise<Metadata> => {
  const { slug } = await params
  const { frontmatter } = await getMarkdownBySlug('industries', slug)

  if (!frontmatter) {
    return {}
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description
  }
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const industriesFiles = await getMarkdownFiles('industries')
  return industriesFiles.map((file) => ({
    slug: file.replace(/\.md$/, '')
  }))
}

const IndustryPage = async ({ params }: IndustryPageProps) => {
  const { slug } = await params
  const { frontmatter, htmlContent } = await getMarkdownBySlug(
    'industries',
    slug
  )

  if (!frontmatter) {
    return notFound()
  }

  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">Industries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border border-gray-200 rounded">
          <h2 className="text-2xl font-bold">{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </main>
  )
}

export default IndustryPage
