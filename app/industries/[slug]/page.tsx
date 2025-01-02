import { getMarkdownBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const slug = await Promise.resolve(params.slug)
  const { frontmatter } = await getMarkdownBySlug('industries', slug)
  
  return {
    title: frontmatter.title,
    description: frontmatter.description
  }
}

export default async function IndustryPage({
  params,
}: {
  readonly params: { slug: string }
}) {
  const slug = await Promise.resolve(params.slug)
  const { frontmatter, htmlContent } = await getMarkdownBySlug(
    'industries',
    slug
  )

  if (!frontmatter) {
    notFound()
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
