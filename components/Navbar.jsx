'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'

// Define the main navigation links
const navLinks = [
  { name: 'Home', href: '/goals' },
  { name: 'Short Goals', href: '/goals/shortGoals' },
  { name: 'Long Goals', href: '/goals/longGoals' },
  { name: 'About', href: '/goals/about' },
]

// Custom component for the animated links (Apple-style minimal hover)
const NavLink = ({ href, children }) => (
  <motion.div
    // Minimal interaction: slightly scale and increase opacity on hover
    whileHover={{ opacity: 1, scale: 1.05 }} 
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0.8 }} // Start slightly subdued
    className="h-full flex items-center transition-opacity duration-200"
  >
    <Link
      href={href}
      // Cleaner typography, using 'text-sm' and 'text-gray-600' for a subtle, premium look
      className="text-sm font-normal text-gray-600 transition-colors duration-200 hover:text-gray-900 px-3 py-2"
    >
      {children}
    </Link>
  </motion.div>
)


export default function Navbar() {
  return (
    <header 
      // Premium header: Semi-transparent white with blur and a thin border
      className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      {/* Centered, constrained content area (max-w-7xl is best practice) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Core layout: Logo | Nav Links | CTA (justify-between maintained) */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo - Smooth motion on mount */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/goals" className="text-xl font-extrabold tracking-tight text-gray-900">
              blaise<span className="text-teal-500">GO</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Clean, minimal, and typography-focused */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}

            {/* Dropdown Menu (for support) */}
            <DropdownMenu>
           
              <DropdownMenuContent align="end" className="w-40 border border-gray-100 shadow-xl">
                <DropdownMenuItem asChild>
                  <Link href="/goals/support" className="text-sm font-medium">Get Help</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA/Action Button - High contrast, rounded pill */}
          <div className="hidden md:block">
             <Button 
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                size="sm"
            >
              <Link href="/goals/support">Start Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Open mobile navigation menu"
                  className="text-gray-900 hover:bg-gray-100" 
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="p-6 w-64 border-l border-gray-200 bg-white/95 backdrop-blur-sm">
                
                {/* A11Y Fix: Visually Hidden Sheet Title (MANDATORY) */}
                <VisuallyHidden.Root>
                    <SheetTitle>Mobile Navigation Menu</SheetTitle>
                </VisuallyHidden.Root>

                <div className="flex justify-end items-center mb-8">
                  {/* Close button */}
                  <Button variant="ghost" size="icon" aria-label="Close menu" className="text-gray-900 hover:bg-gray-100">
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08, type: 'spring', stiffness: 300, damping: 30 }}
                      >
                        <Link
                          href={link.href}
                          className="block text-xl font-semibold text-gray-800 py-2 hover:text-teal-500 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* CTA at the bottom of the mobile menu */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg">
                        <Link href="/goals/support">Get Started</Link>
                      </Button>
                    </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}