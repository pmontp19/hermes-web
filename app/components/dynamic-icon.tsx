'use client'

import dynamic from 'next/dynamic'
import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface DynamicIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])
  return <LucideIcon {...props} />
}