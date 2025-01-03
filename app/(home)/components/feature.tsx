import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface FeatureProps {
  variant?: 'imageRight' | 'imageLeft'
  badge?: string
  title: string
  description: string
  image: string
  alt?: string
}

export const Feature = ({
  variant = 'imageRight',
  badge,
  title,
  description,
  image,
  alt = ''
}: FeatureProps) => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        {variant === 'imageLeft' && (
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
            <Image
              src={image}
              alt={alt}
              className="rounded-md"
              width={800}
              height={400}
            />
          </div>
        )}

        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>{badge && <Badge>{badge}</Badge>}</div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              {description}
            </p>
          </div>
        </div>

        {variant === 'imageRight' && (
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
            <Image
              src={image}
              alt={alt}
              className="rounded-md"
              width={800}
              height={400}
            />
          </div>
        )}

      </div>
    </div>
  </div>
)
