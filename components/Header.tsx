'use client'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Menu, MoveRight, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { ContentFrontmatter } from '@/lib/markdown'
import { title } from 'process'

export interface ContentItem extends ContentFrontmatter {
  slug: string
}

interface HeaderProps {
  solutionsData: ContentItem[]
  industriesData: ContentItem[]
}

export const Header = ({ solutionsData, industriesData }: HeaderProps) => {
  const navigationItems = [
    {
      title: 'Home',
      href: '/',
      description: ''
    },
    {
      title: 'Solutions',
      description: 'Managing a small business today is already tough.',
      parent: '/solutions',
      items: solutionsData.map((solution) => ({
        title: solution.title,
        href: `/solutions/${solution.slug}`
      }))
    },
    {
      title: 'Industries',
      description: 'Specialized solutions for different industry sectors.',
      parent: '/industries',
      items: industriesData.map((industry) => ({
        title: industry.title,
        href: `/industries/${industry.slug}`
      }))
    }
  ]

  const [isOpen, setOpen] = useState(false)
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background/30 backdrop-filter backdrop-blur-lg">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink asChild>
                        <Button variant="ghost" asChild>
                          <Link href={item.href}>{item.title}</Link>
                        </Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                            <NavigationMenuLink
                              href={item.parent}
                              className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded font-semibold"
                            >
                              <span>{`View all ${item.title.toLowerCase()}`}</span>
                              <MoveRight className="w-4 h-4 text-muted-foreground" />
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Link href="/" className="font-semibold">
            Mapache Inc
          </Link>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" className="hidden md:inline">
            Book a demo
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Button>Get started</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}