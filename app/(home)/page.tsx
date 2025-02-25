import { Contact } from '@/app/(home)/components/contact'
import { Hero } from '@/app/(home)/components/hero'
import { Stats } from '@/app/(home)/components/stats'
import * as motion from 'motion/react-client'
import { commonAnimationProps } from '@/design/animations'
import { BadgeCheck, ShieldCheck, Timer } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero
        heading="Empowering Your Business"
        subheading="We provide the tools you need to succeed."
        ctaText="Get Started"
        ctaLink="/contact"
      />
      <div className="flex w-full flex-col items-center gap-24 xl:gap-48">
        <div className="flex w-full flex-col px-2 md:px-12 lg:px-24 lg:text-center">
          <motion.span
            {...commonAnimationProps}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <p className="text-5xl font-bold">
              How does Mapache Inc help{' '}
              <u className="font-extrabold text-primary">your</u> customers?
            </p>
          </motion.span>
          <p className="mt-4 text-lg font-normal">
            Mapache Inc we provide you with the services you need to help your
            customers.
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-start lg:items-center lg:text-center text-left mb-10 lg:mb-0">
              <div className="flex items-center justify-center text-primary mb-5">
                <BadgeCheck size={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Precision & Quality
              </h3>
              <p className="text-base text-muted-foreground">
                Every word matters. We ensure flawless productions and technical
                accuracy. Our expertise spans a wide range of industries
                guaranteeing industry-specific precision.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center lg:text-center text-left mb-10 lg:mb-0">
              <div className="flex items-center justify-center text-primary mb-5">
                <ShieldCheck size={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Secure & Confidential Handling
              </h3>
              <p className="text-base text-muted-foreground">
                Your documents are in safe hands. We adhere to strict
                confidentiality agreements and employ the latest in security
                technology to protect sensitive information. Trust and
                discretion are our top priorities.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-center lg:text-center text-left">
              <div className="flex items-center justify-center text-primary mb-5">
                <Timer size={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Fast & Reliable Turnaround
              </h3>
              <p className="text-base text-muted-foreground">
                Deadlines are non-negotiable. We deliver high-quality services
                on time, even for urgent projects. Our efficient workflow and
                clear communication ensure smooth project management, no matter
                the size.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </>
  )
}
