import { getContentItems } from '@/lib/content'
import { Header } from './Header'

export async function HeaderWrapper() {
  const [solutionsData, industriesData] = await Promise.all([
    getContentItems('solutions'),
    getContentItems('industries')
  ])

  return <Header solutionsData={solutionsData} industriesData={industriesData} />
}
