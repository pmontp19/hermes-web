import { MarkdownContent } from '@/components/MarkdownContent'
import { getMarkdownBySlug, getMarkdownFiles } from '@/lib/markdown'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type SolutionPageProps = {
  readonly params: Promise<{
    slug: string
  }>
}

export const generateMetadata = async ({
  params
}: SolutionPageProps): Promise<Metadata> => {
  const { slug } = await params
  const { frontmatter } = await getMarkdownBySlug('solutions', slug)

  if (!frontmatter) {
    return {}
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description
  }
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const solutionsFiles = await getMarkdownFiles('solutions')
  return solutionsFiles.map((file) => ({
    slug: file.replace(/\.md$/, '')
  }))
}

const SolutionPage = async ({ params }: SolutionPageProps) => {
  const { slug } = await params
  const { frontmatter, htmlContent } = await getMarkdownBySlug(
    'solutions',
    slug
  )

  if (!frontmatter) {
    return notFound()
  }

  return <MarkdownContent frontmatter={frontmatter} htmlContent={htmlContent} type="solution" />
}

export default SolutionPage
