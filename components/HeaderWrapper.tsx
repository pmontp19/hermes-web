import { getMarkdownFiles, getMarkdownBySlug, ContentFrontmatter } from '@/lib/markdown'
import { Header } from './Header'
import type { ContentItem } from './Header'

function isContentItem(data: { slug: string; } & ContentFrontmatter): data is ContentItem {
  return typeof data.title === 'string' 
    && typeof data.description === 'string'
    && typeof data.slug === 'string';
}

async function getContentItems(directory: string): Promise<ContentItem[]> {
  const files = await getMarkdownFiles(directory)
  const items: ContentItem[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '')
    const { frontmatter } = await getMarkdownBySlug(directory, slug)
    const item = { slug, ...frontmatter }
    if (isContentItem(item)) {
      items.push(item)
    }
  }

  return items
}

export async function HeaderWrapper() {
  const [solutionsData, industriesData] = await Promise.all([
    getContentItems('solutions'),
    getContentItems('industries')
  ])

  return <Header solutionsData={solutionsData} industriesData={industriesData} />
}
