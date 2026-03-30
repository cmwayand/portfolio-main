"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20 pt-8 pb-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="text-center text-lg font-bold tracking-tight text-neutral-950 lg:text-left"
        >
          Claire Wayand
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            About me
          </Link>
          <Link
            href="/#work"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            Portfolio
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-4 lg:justify-end">
          <a
            href="https://www.linkedin.com/in/clairewayand/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-[22px] w-[22px]" strokeWidth={1.75} />
          </a>
          <Link
            href="/contact"
            className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Email"
          >
            <Mail className="h-[22px] w-[22px]" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </header>
  );
}
