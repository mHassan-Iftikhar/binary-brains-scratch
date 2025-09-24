"use client";

import React, { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is your typical software development process?",
    answer:
      "We start with discovery and requirements, then UX/UI design, agile development in sprints, QA, deployment, and post‑launch support. You’ll get demos at the end of each sprint.",
  },
  {
    id: 2,
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take 4–10 weeks depending on scope and integrations. We share a timeline after a short scoping call and refine it during sprint planning.",
  },
  {
    id: 3,
    question: "How do you price projects?",
    answer:
      "We offer fixed‑scope/fixed‑fee for clearly defined work and time‑and‑materials for evolving products. All estimates include design, development, QA, and PM unless stated otherwise.",
  },
  {
    id: 4,
    question: "Which technologies do you use?",
    answer:
      "Frontend: React/Next.js, Tailwind. Backend: Node/Express/Nest, Python/FastAPI. Mobile: React Native. Cloud: AWS/Vercel. We choose a stack to fit your goals and team",
  },
  {
    id: 5,
    question: "Who owns the code and IP?",
    answer:
      "You own the code, designs, and all project IP upon payment as defined in our agreement. We deliver source code in Git with documentation.",
  },
  {
    id: 6,
    question: "Do you provide maintenance and support?",
    answer:
      "Yes. We offer flexible retainers covering monitoring, security updates, bug fixes, small features, and performance improvements.",
  },
  {
    id: 7,
    question: "How will we communicate and track progress?",
    answer:
      "We work in weekly sprints with Slack for day‑to‑day, Jira/Linear for tasks, and a demo/review call each sprint. You’ll have a dedicated PM.",
  },
  {
    id: 8,
    question: "Can you help with cloud deployment and DevOps?",
    answer:
      "Absolutely. We set up CI/CD, staging, observability, and scalable infrastructure on AWS, Vercel, or your preferred cloud provider.",
  },
];

const SectionHeading = ({ title }: { title: string }) => (
  <h3 className="text-xs tracking-[0.2em] text-zinc-500">{title}</h3>
);

// Social media links configuration
const socialLinks = [
  {
    id: 1,
    platform: "Instagram",
    url: "https://instagram.com/binarybrains",
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 2,
    platform: "Twitter",
    url: "https://twitter.com/binarybrains",
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    id: 3,
    platform: "LinkedIn",
    url: "https://linkedin.com/company/binarybrains",
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative w-full bg-white text-black">
      {/* Hero/Header */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        {/* Giant Title */}
        <h1
          className="select-none leading-none font-humane text-[20vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] text-transparent -mt-6 mb-8"
          style={{
            WebkitTextStroke: "3px rgba(0, 0, 0, 0.1)",
          }}
        >
          LET&apos;S TALK
        </h1>

        {/* Content Row */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 -mt-10">
          {/* Left column: copy + addresses */}
          <div className="z-10 space-y-8">
            <p className="max-w-md text-sm text-zinc-600">
              For any inquiries, collaborations, or just to say hello, we&apos;d
              love to hear from you! Reach out, and let&apos;s connect.
            </p>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-zinc-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-zinc-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-zinc-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-zinc-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-2xl hover:bg-zinc-800 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>

            <div className="space-y-8">
              <div>
                <SectionHeading title="SALES" />
                <div className="mt-3 text-sm space-y-1">
                  <p>BINARY BRAINS</p>
                  <a
                    href="mailto:hello@binarybrains.co.uk"
                    className="underline"
                  >
                    hello@binarybrains.co.uk
                  </a>
                </div>
              </div>

              <div>
                <SectionHeading title="HEAD OFFICE" />
                <div className="mt-3 text-sm space-y-1">
                  <p>BINARY BRAINS</p>
                  <p>Upar Canal, Lahore, Pakistan</p>
                </div>
              </div>

              <div>
                <SectionHeading title="FOLLOW US" />
                <div className="mt-3 flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: animated gif */}
          <div className="relative min-h-[420px] md:min-h-[520px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/01.mp4"
              className="object-contain object-right md:object-right-top rounded-3xl select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-28">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <div className="divide-y">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full text-left py-5 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm md:text-base font-medium">
                    {item.question}
                  </span>
                  <span className="text-xl md:text-2xl leading-none select-none">
                    {isOpen ? "—" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-3 text-sm text-zinc-600 max-w-2xl">
                    {item.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
