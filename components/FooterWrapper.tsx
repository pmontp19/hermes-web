import { getContentItems } from '@/lib/content'
import { Footer } from './Footer'

export async function FooterWrapper() {
  const [solutionsData, industriesData] = await Promise.all([
    getContentItems('solutions'),
    getContentItems('industries')
  ])

  return <Footer solutionsData={solutionsData} industriesData={industriesData} />
}
