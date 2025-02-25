import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { DynamicIcon } from './dynamic-icon'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface Feature {
  icon?: keyof typeof dynamicIconImports
  title: string
  description: string
  href: string
}

interface FeaturesListProps {
  badge: string
  title: string
  description: string
  features: Feature[]
}

export const FeaturesList = ({
  badge,
  title,
  description,
  features
}: FeaturesListProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border rounded-3xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-900/20"
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-4">
                  {feature.icon && (
                    <DynamicIcon
                      name={feature.icon}
                      className="h-7 w-7 text-accent"
                    />
                  )}
                </div>
                <CardTitle className="text-2xl font-semibold text-primary">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-500 text-lg">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href={feature.href} 
                  className="group inline-flex items-center transition-colors text-lg"
                >
                  Learn more
                  <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>
)
