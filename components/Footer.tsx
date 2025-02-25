'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ContentItem } from './Header'

interface FooterProps {
  solutionsData: ContentItem[]
  industriesData: ContentItem[]
}

export const Footer = ({ solutionsData, industriesData }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-muted/30 border-t" role="contentinfo">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Context Linguistics</h3>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with advanced linguistic solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Solutions</h3>
            <nav className="flex flex-col gap-2">
              {solutionsData.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {solution.title}
                </Link>
              ))}
              <Link
                href="/solutions"
                className="text-sm font-semibold hover:text-foreground transition-colors"
              >
                View all solutions
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Industries</h3>
            <nav className="flex flex-col gap-2">
              {industriesData.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {industry.title}
                </Link>
              ))}
              <Link
                href="/industries"
                className="text-sm font-semibold hover:text-foreground transition-colors"
              >
                View all industries
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Get Started</h3>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Book a demo
              </Button>
              <Button size="sm">Get started</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Context Linguistics. All rights reserved.
          </p>
          <nav className="flex gap-4" aria-label="Legal">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
