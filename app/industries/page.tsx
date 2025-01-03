import { getMarkdownFiles, getMarkdownBySlug } from '@/lib/markdown'
import { FeaturesList } from '../components/features-list'

export default async function IndustriesPage() {
  const industriesFiles = await getMarkdownFiles('industries')
  const industriesData = []

  for (const file of industriesFiles) {
    const slug = file.replace(/\.md$/, '')
    const { frontmatter } = await getMarkdownBySlug('industries', slug)
    industriesData.push({ slug, ...frontmatter })
  }

  return (
    <FeaturesList
      title='Industry solutions'
      description='Discover how our industry solutions can help you improve efficiency, reduce costs, and capture new market opportunities.'
      features={industriesData.map((industry) => ({
        icon: industry.icon,
        title: industry.title,
        description: industry.description,
        href: `/industries/${industry.slug}`,
      }))}
      badge='Industries'
    />
  )
}
