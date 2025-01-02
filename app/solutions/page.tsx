import { getMarkdownFiles, getMarkdownBySlug } from '@/lib/markdown'
import { FeaturesList } from '../components/features-list'

export default async function ServicesPage() {
  const solutionsFiles = await getMarkdownFiles('solutions')
  const solutionsdata = []

  for (const file of solutionsFiles) {
    const slug = file.replace(/\.md$/, '')
    const { frontmatter } = await getMarkdownBySlug('solutions', slug)
    solutionsdata.push({ slug, ...frontmatter })
  }

  return (
    <FeaturesList
      title='The solutions you need to build what you want'
      description='We provide the best solutions for your business.'
      features={solutionsdata.map((solution) => ({
        icon: solution.icon,
        title: solution.title,
        description: solution.description,
        href: `/solutions/${solution.slug}`,
      }))}
      badge='Solutions'
    />
  )
}
