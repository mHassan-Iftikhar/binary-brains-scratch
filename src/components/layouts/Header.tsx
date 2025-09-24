"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Navigation items configuration (use real routes / hash anchors)
const navigationItems = [
  { id: 1, label: "HOME", href: "/#home" },
  { id: 2, label: "ABOUT", href: "/about" },
  { id: 3, label: "SERVICES", href: "/services" },
  { id: 4, label: "WORKS", href: "/work" },
];

// Mobile menu navigation items
const mobileNavigationItems = navigationItems;

// Company information
const companyInfo = {
  name: "Binary Brains",
  logo: "●",
};

// Contact information
const contactInfo = {
  email: "binarybrainsofficial@gmail.com",
  copyright: "Copyright 2025. All rights reserved.",
  owner: {
    name: "Binary Brains",
    title: "Creative director and brand consultant.",
  },
};

// Social media links
const socialLinks = [
  { id: 1, platform: "twitter", href: "#", icon: "twitter" },
  { id: 2, platform: "linkedin", href: "#", icon: "linkedin" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>("/");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections with white/light backgrounds
      const whiteSections = document.querySelectorAll(
        '[data-bg="white"], .bg-white, .bg-gray-50, .bg-gray-100, [class*="bg-white"]'
      );
      const header = document.querySelector("header");

      if (header) {
        const headerRect = header.getBoundingClientRect();
        const headerCenter = headerRect.top + headerRect.height / 2;

        let isOverWhiteSection = false;

        whiteSections.forEach((section) => {
          const sectionRect = section.getBoundingClientRect();
          if (
            headerCenter >= sectionRect.top &&
            headerCenter <= sectionRect.bottom
          ) {
            isOverWhiteSection = true;
          }
        });

        setIsDarkMode(isOverWhiteSection);
      }
    };

    // Check on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Track active section on the home page using IntersectionObserver
  useEffect(() => {
    // If we're not on the home page, active is just the pathname
    if (pathname !== "/") {
      setActiveHref(pathname ?? "/");
      return;
    }

    // Set HOME as default when on home page
    setActiveHref("/home");

    const sectionIds = navigationItems
      .map((i) => (i.href.startsWith("/") ? i.href.replace("/", "") : null))
      .filter(Boolean) as string[];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveHref(`/${id}`);
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -70% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    try {
      setActiveHref(href);
      router.push(href);
    } finally {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="w-full fixed top-0 left-0 z-50 selection:bg-white selection:text-black">
        <header
          className={`rounded-full mx-4 my-2 flex items-center justify-between px-4 md:px-8 py-4 shadow-2xl transition-all duration-300 ease-in-out ${
            isDarkMode
              ? "bg-black/90 backdrop-blur-lg border border-white/20"
              : "bg-black/90 backdrop-blur-lg border border-white/20"
          }`}
        >
          <div
            className={`text-sm px-4 py-2 rounded-full border shadow-lg transition-all duration-300 ease-in-out ${
              isDarkMode
                ? "bg-white/90 backdrop-blur-md text-black border-white/20"
                : "bg-white/90 backdrop-blur-md text-black border-white/20"
            }`}
          >
            {companyInfo.logo} {companyInfo.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-2 text-sm">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2 transition-all duration-300 backdrop-blur-md border ${
                      item.href === activeHref
                        ? "bg-white text-black border-white rounded-full"
                        : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black hover:rounded-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <Button
            onClick={() => handleNavClick("/contact")}
            className="hidden md:flex bg-gray-nav text-black rounded px-4 py-2 hover:!bg-white hover:rounded-full hover:text-black transition-all duration-300 items-center gap-2 hover:gap-4"
          >
            Let&apos;s Talk
            <MoveUpRight size={16} />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded transition-colors duration-300 ${
              isDarkMode
                ? "text-white hover:bg-white/10"
                : "text-black hover:bg-black/10"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-20 left-4 right-4 rounded-4xl shadow-2xl backdrop-blur-lg border transition-all duration-300 z-40 mt-2 ${
            isDarkMode
              ? "bg-black/90 border-white/20 text-white"
              : "bg-white/90 border-black/10 text-black"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Navigation */}
            <nav className="flex-1 px-4 py-8">
              <ul className="space-y-6">
                {mobileNavigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`text-4xl font-regular block py-2 transition-colors ${
                        item.href === activeHref
                          ? "text-white border-b-2 border-white pb-4"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Get In Touch Button */}
              <div className="mt-8">
                <Button
                  className="bg-white rounded px-6 py-6 text-black font-medium flex-1"
                  onClick={() => handleNavClick("/contact")}
                >
                  LET&apos;S TALK
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
              <Link href="/contact" className="text-gray-400 text-xs">
                {contactInfo.copyright}
                <br />
                Get in touch - {contactInfo.email}
              </Link>

              {/* Owner Information */}
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-white text-sm font-medium"
                >
                  {contactInfo.owner.name}
                </Link>
                <Link href="/contact" className="text-gray-400 text-xs">
                  {contactInfo.owner.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
