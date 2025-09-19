'use client';

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

// Navigation items configuration
const navigationItems = [
  { id: 1, label: 'HOME', Link: '/', isActive: true },
  { id: 2, label: 'ABOUT', Link: '/about', isActive: false },
  { id: 3, label: 'SERVICES', Link: '/services', isActive: false },
  { id: 4, label: 'WORKS', Link: '/works', isActive: false },
]

// Mobile menu navigation items (different from desktop)
const mobileNavigationItems = [
  { id: 1, label: 'HOME', Link: '#', isActive: true },
  { id: 2, label: 'ABOUT', Link: '#', isActive: false },
  { id: 3, label: 'SERVICES', Link: '#', isActive: false },
  { id: 4, label: 'WORKS', Link: '#', isActive: false },
]

// Company information
const companyInfo = {
  name: 'Binary Brains',
  logo: '●',
}

// Contact information
const contactInfo = {
  email: 'hello@binarybrains.co.uk',
  copyright: 'Copyright 2024. All rights reserved.',
  owner: {
    name: 'Binary Brains',
    title: 'Creative director and brand consultant.',
  }
}

// Social media links
const socialLinks = [
  { id: 1, platform: 'twitter', href: '#', icon: 'twitter' },
  { id: 2, platform: 'linkedin', href: '#', icon: 'linkedin' },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (href: string) => {
    // Handle navigation
    console.log(`Navigating to: ${href}`)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <div className="w-full fixed top-0 left-0 z-99 selection:bg-white selection:text-black">
        <div className='flex items-center justify-between px-4 md:px-8 py-4'>
        <div className="text-sm bg-white px-4 py-2 text-black rounded">
          {companyInfo.logo} {companyInfo.name}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-2 text-sm">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className={`rounded px-4 py-2 cursor-pointer transition-all duration-300 ${
                  item.isActive 
                    ? 'bg-white text-black rounded-full' 
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:rounded-full'
                }`}
                onClick={() => handleNavClick(item.Link)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <Button className='hidden md:flex bg-gray-nav text-black rounded px-4 py-2 hover:!bg-white hover:rounded-full hover:text-black transition-all duration-300 items-center gap-2 hover:gap-4'>
          Let's Talk
          <MoveUpRight size={16} />
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden selection:bg-white selection:text-black">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
              <div className="text-sm bg-white px-4 py-2 text-black rounded">
                {companyInfo.logo} {companyInfo.name}
              </div>
              <Button
                onClick={toggleMobileMenu}
                className="p-2"
                aria-label="Close mobile menu"
              >
                <X size={24} className="text-white" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8">
              <ul className="space-y-6">
                {mobileNavigationItems.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      href={item.Link}
                      className={`text-4xl font-bold block py-2 ${item.isActive
                          ? 'text-white border-b-2 border-white pb-4'
                          : 'text-gray-400'
                        }`}
                      onClick={() => handleNavClick(item.Link)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Get In Touch Button */}
              <div className="mt-8">
                <Button 
                  className='bg-white rounded px-6 py-6 text-black font-medium flex-1'
                  onClick={() => handleNavClick('#contact')}
                >
                  LET'S TALK
                </Button>
              </div>
            </nav>

            {/* Footer */}
            <div className="px-4 py-8 border-t border-gray-700">
              {/* Social Links */}
              <div className="flex items-center gap-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </a>
                ))}
              </div>

              {/* Contact Information */}
              <p className="text-gray-400 text-xs">
                {contactInfo.copyright}
                <br />
                Get in touch - {contactInfo.email}
              </p>

              {/* Owner Information */}
              <div className="mt-4">
                <p className="text-white text-sm font-medium">{contactInfo.owner.name}</p>
                <p className="text-gray-400 text-xs">{contactInfo.owner.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header