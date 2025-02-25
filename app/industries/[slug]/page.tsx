import { MarkdownContent } from '@/components/MarkdownContent'
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

  return <MarkdownContent frontmatter={frontmatter} htmlContent={htmlContent} type="industry" />
}

export default IndustryPage
