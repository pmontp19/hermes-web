import { MoveRight } from 'lucide-react'
import { buttonVariants } from '../../../components/ui/button'
import Link from 'next/link'
import * as motion from 'motion/react-client'
import { commonAnimationProps } from '../../../design/animations'

interface HeroProps {
  heading: string
  subheading: string
  ctaText: string
  ctaLink: string
}

export const Hero = ({ heading, subheading, ctaText, ctaLink }: HeroProps) => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div className="flex gap-4 flex-col">
          <motion.span
            {...commonAnimationProps}
            transition={{ delay: 0.15 }}
          >
            <h1 className="text-6xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              {heading}
            </h1>
          </motion.span>
          <motion.span
            {...commonAnimationProps}
            transition={{ delay: 0.30 }}
          >
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {subheading}
            </p>
          </motion.span>
        </div>
        <motion.div className="flex flex-row gap-3" {...commonAnimationProps} transition={{ delay: 0.45 }}>
          <Link href={ctaLink} className={buttonVariants()}>
            {ctaText}
            <MoveRight size={24} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
)
