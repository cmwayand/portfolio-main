"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Download, Check } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import MeshGradient from "@/components/MeshGradient";

const TESTIMONIALS = [
  {
    quote:
      "A rare blend of creativity and strategy. Claire brings intentionality, warmth, and a deep commitment to excellence to everything she builds. She doesn't just deliver high-quality work; she elevates the ideas and teams around her",
    name: "Sejal S.",
    role: "Product Designer",
  },
  {
    quote:
      "Claire's evolution as a designer is marked by creativity, curiosity, and a deep focus on the end-user. She conquers challenges with grace, consistently delivering outstanding work while maintaining an inspiring, collaborative, and adaptable attitude.",
    name: "Amy L.",
    role: "Product Designer",
  },
  {
    quote:
      "Claire is a talented designer with a powerful entrepreneurial spirit. From concept to market launch, she combines data-driven research with a willingness to take calculated risks. Her well-rounded skill set and 'people-first' approach make her an invaluable asset to both startups and established corporations.",
    name: "Robert C.",
    role: "Product Owner",
  },
  {
    quote:
      "In her transition from graphic to product design, Claire has made incredible strides. Her design background gives her a unique edge in UI, while her commitment to research ensures a top-tier user experience. Even in high-pressure environments, her positive energy makes her an amazing teammate.",
    name: "Mari G.",
    role: "Product Designer",
  },
  {
    quote:
      "Claire is a lifelong learner who consistently steps beyond her core role to support her team. She actively seeks feedback and applies it with precision, demonstrating a powerful growth mindset. Her sense of ownership and collaborative spirit make her a premier asset to any product design team.",
    name: "Von C.",
    role: "Mobile Product Designer",
  },
  {
    quote:
      "Claire joined our mobile team when our designer went on sabbatical and immediately synergized with everyone. She quickly adapted to our mobile standards, even in the midst of several in-progress projects. She is a great team player who is always ready to hit the ground running and learns new things exceptionally quickly!",
    name: "Eric S.",
    role: "Product Manager",
  },
] as const;

const COMPANY_LOGOS = [
  { href: "https://madisonauto.org/", src: "/maap.png", label: "MAAP" },
  { href: "https://www.coconstruct.com/", src: "/coconstruct.png", label: "CoConstruct" },
  { href: "https://buildertrend.com/", src: "/buildertrend.png", label: "Buildertrend" },
  { href: "https://www.shifthq.ai/", src: "/shiftai.png", label: "SHIFT" },
  { href: "https://www.wavydogdesign.com/", src: "/wavydogdesign.png", label: "Wavy Dog Design" },
  { href: "https://www.cargolabs.com/", src: "/cargolabs.png", label: "Cargo Labs" },
] as const;

export default function Page() {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (downloadStatus === 'loading' || downloadStatus === 'success') return;
    
    setDownloadStatus('loading');
    setProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadStatus('success');
          
          // Trigger actual PDF download
          const link = document.createElement('a');
          link.href = "/CLAIRE_WAYAND_UX%3AUI_DESIGNER_RESUME.pdf";
          link.download = "Claire_Wayand_UX_UI_Designer_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Reset after 2 seconds
          setTimeout(() => {
            setDownloadStatus('idle');
            setProgress(0);
          }, 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero + nav: mesh gradient, wide margins, reference-style layout */}
      <div className="relative overflow-hidden bg-white">
        <MeshGradient />

        <SiteHeader />

        <section className="relative z-10 mx-auto max-w-7xl pl-6 pr-10 pt-12 pb-20 sm:pl-10 sm:pr-14 sm:pb-24 sm:pt-16 md:pl-12 md:pr-20 md:pt-20 md:pb-28 lg:pl-16 lg:pr-24 lg:pt-24 xl:pl-20 xl:pr-28">
          <div className="grid w-full grid-cols-1 items-center gap-10 sm:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] sm:gap-x-8 md:gap-x-10 lg:gap-x-12">
            <div className="mx-auto w-full max-w-[26rem] text-center sm:mx-0 sm:text-left">
              <h1 className="mb-0 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-neutral-950 sm:text-4xl md:text-[2.65rem]">
                Product Designer and UX Strategist
              </h1>

              <p className="mx-auto mt-2 max-w-[24rem] text-pretty text-base leading-relaxed text-neutral-500 sm:mx-0 sm:mt-2 sm:text-lg">
                I design end-to-end experiences for{" "}
                <strong className="font-semibold text-neutral-900">
                  B2B SaaS and web products
                </strong>
                , from discovery through launch — including{" "}
                <strong className="font-semibold text-neutral-900">
                  AI-assisted workflows
                </strong>{" "}
                that stay usable, trustworthy, and on-brand.
              </p>

              <div className="mx-auto mt-5 flex max-w-[26rem] flex-wrap justify-center gap-2 sm:mx-0 sm:mt-5 sm:justify-start">
                {[
                  "# UX",
                  "# B2B SaaS",
                  "# AI",
                  "# Design systems",
                  "# Mobile",
                  "# Web design",
                  "# Custom code",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-600 sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-6 flex max-w-[26rem] flex-col items-center sm:mx-0 sm:mt-7 sm:items-start">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={
                    downloadStatus === "loading" || downloadStatus === "success"
                  }
                  className="relative inline-flex min-h-[44px] items-center justify-center gap-2 overflow-hidden rounded-full bg-neutral-950 px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {downloadStatus === "loading" && (
                    <motion.div
                      className="absolute inset-0 bg-white/15"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.08 }}
                    />
                  )}
                  {downloadStatus === "success" && (
                    <motion.div
                      className="absolute inset-0 bg-emerald-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {downloadStatus === "success" ? (
                      <>
                        <Check className="h-4 w-4" />
                        Downloaded
                      </>
                    ) : downloadStatus === "loading" ? (
                      <>
                        <Download className="h-4 w-4 animate-pulse" />
                        Downloading… {progress}%
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Download resume
                      </>
                    )}
                  </span>
                </button>
                {downloadStatus === "loading" && (
                  <div className="mt-3 h-1 w-full max-w-[240px] overflow-hidden rounded-full bg-neutral-200 sm:max-w-[200px]">
                    <motion.div
                      className="h-full bg-neutral-400/80"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.08 }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex w-full justify-center sm:justify-end sm:-translate-x-[150px]">
              <motion.img
                src="/claire.png"
                alt="Claire Wayand and design tools"
                className="h-auto w-full max-w-[min(100%,12.25rem)] object-contain sm:max-w-[13.5rem] md:max-w-[16rem] lg:max-w-[18.5rem]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Impact metrics — below hero, before Recent Work */}
      <section
        className="border-t border-neutral-200 bg-white px-6 py-10 sm:px-10 sm:py-12 md:py-14 lg:px-16 xl:px-20"
        aria-label="Key results"
      >
        <div className="mx-auto max-w-7xl">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:gap-12">
            <li className="text-center sm:text-left">
              <p className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                28%
              </p>
              <p className="mt-2 text-base leading-snug text-neutral-600">
                Reduced churn
              </p>
            </li>
            <li className="text-center sm:text-left">
              <p className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                97%
              </p>
              <p className="mt-2 text-base leading-snug text-neutral-600">
                Improved completion time
              </p>
            </li>
            <li className="text-center sm:text-left">
              <p className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                44%
              </p>
              <p className="mt-2 text-base leading-snug text-neutral-600">
                Increased adoption
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="work" className="px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="mb-6 text-left text-2xl font-bold tracking-tight text-neutral-950 sm:mb-8 sm:text-3xl md:text-4xl">
              Recent Work
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {(
                [
                  {
                    href: "/ios-app",
                    img: "/roomsparkcover.png",
                    imgAlt: "iOS app project",
                    title:
                      "RoomSpark: Defining the Standard for the $830B Home Transformation Industry.",
                    desc: "How I built and launched an entire AI iOS app from discovery to MVP release",
                    date: "April 2025 - Present",
                  },
                  {
                    href: "/client-dashboard",
                    img: "/dashboard.png",
                    imgAlt: "Client dashboard project",
                    title:
                      "Improving the client dashboard and reducing churn by 28%",
                    desc: "Transforming the client dashboard from a static data repository into a high-engagement, intuitive experience that fosters transparency and trust.",
                    date: "November 2023 - February 2024",
                  },
                  {
                    href: "/saving-builders",
                    img: "coverclientupdates.png",
                    imgAlt: "Saving builders project",
                    title:
                      "How I Saved Builders 115 Hours & Improved Completion Time by 97%",
                    desc: "Using AI to generate automatic updates for clients, improving communication, and saving them 6+ hours a week.",
                    date: "August 2024 - January 2025",
                  },
                  {
                    href: "/builders-updates",
                    img: "websitedesign.png",
                    imgAlt: "Builders updates project",
                    title: "Marketing, Web Design and Digital Graphics",
                    desc: "Marketing design for CoConstruct, Buildertrend and other digital freelance work",
                    date: "February 2021 - Present",
                  },
                ] as const
              ).map((project) => (
                <Link
                  key={project.href}
                  href={project.href}
                  className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:border-neutral-400 hover:shadow-md">
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-neutral-100">
                      <img
                        src={project.img}
                        alt={project.imgAlt}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/45"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-1 flex-col border-t border-neutral-100 p-5 sm:p-6">
                      <h3 className="mb-2 text-xl font-bold leading-snug text-neutral-950 transition-colors group-hover:text-neutral-800 sm:text-2xl sm:leading-snug">
                        {project.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {project.desc}
                      </p>
                      <p className="text-xs text-neutral-500 sm:text-sm">
                        {project.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company logos — below Recent Work */}
      <section
        className="border-t border-neutral-200/80 bg-gradient-to-b from-neutral-50/80 to-white px-6 py-12 sm:px-10 sm:py-14 md:py-16 lg:px-16 xl:px-20"
        aria-label="Companies and partners"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-10 md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Experience across
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Teams &amp; products
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base md:mx-0">
              Organizations I&apos;ve shipped design work with—from B2B SaaS to agencies and startups.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-6">
            {COMPANY_LOGOS.map(({ href, src, label }) => (
              <li key={label} className="min-w-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-32 items-center justify-center rounded-xl border border-neutral-200/90 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 sm:h-36 md:h-40"
                >
                  <img
                    src={src}
                    alt={label}
                    className="max-h-14 w-auto max-w-[min(100%,10rem)] object-contain opacity-55 grayscale transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-16 sm:max-w-[11.5rem] md:max-h-20 md:max-w-[13rem]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials — three per row on large screens; no carousel */}
      <section
        className="px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 bg-white"
        aria-label="Testimonials"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-950 sm:mb-8 sm:text-3xl md:mb-12 md:text-4xl">
            Testimonials
          </h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {TESTIMONIALS.map((t, index) => (
              <li key={`${t.name}-${index}`} className="min-w-0">
                <article className="flex h-full flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-5 shadow-sm sm:p-6">
                  <div className="mb-3 flex gap-0.5" aria-hidden>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400 sm:text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 flex-1 text-pretty text-sm italic leading-relaxed text-neutral-700 sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
