import { Contact } from '@/app/(home)/components/contact'
import { Feature } from '@/app/(home)/components/feature'
import { Hero } from '@/app/(home)/components/hero'
import { getLandingContent } from '@/lib/markdown'

interface FeatureContent {
  badge: string
  title: string
  description: string
  image: string
  alt: string
  variant: 'imageRight' | 'imageLeft'
}

export default async function Home() {
  const landingContent = await getLandingContent()

  return (
        <>
          <Hero
            heading={landingContent.hero.heading}
            subheading={landingContent.hero.subheading}
            ctaText={landingContent.hero.ctaText}
            ctaLink={landingContent.hero.ctaLink}
          />
          {(landingContent.features as FeatureContent[]).map((feature, index) => (
            <Feature
              key={index}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              alt={feature.alt}
              variant={feature.variant}
            />
          ))}
          <Contact />
        </>
  )
}
