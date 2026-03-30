"use client";

import Image from "next/image";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { Monitor, Award } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ACTIVITY_PHOTOS = [
  { src: "/meandpippa.png", alt: "Claire with her dog" },
  { src: "/paris.png", alt: "Paris" },
  { src: "/morocco.png", alt: "Morocco" },
  { src: "/venicebio.jpg", alt: "Venice" },
  { src: "/sunflowers.png", alt: "Sunflowers drawing" },
  { src: "/sloth.png", alt: "Sloth illustration" },
  { src: "/printsbio.jpg", alt: "Printmaking" },
  { src: "/drawing.jpg", alt: "Drawing" },
] as const;

const LIGHTBOX_SLIDES = ACTIVITY_PHOTOS.map((p) => ({
  src: p.src,
  title: p.alt,
}));

/** Flag emojis + short labels; order matches travel history. */
const COUNTRIES_VISITED = [
  { label: "USA", name: "United States", flag: "🇺🇸" },
  { label: "Canada", name: "Canada", flag: "🇨🇦" },
  { label: "Guatemala", name: "Guatemala", flag: "🇬🇹" },
  { label: "Costa Rica", name: "Costa Rica", flag: "🇨🇷" },
  { label: "Italy", name: "Italy", flag: "🇮🇹" },
  { label: "Honduras", name: "Honduras", flag: "🇭🇳" },
  { label: "Puerto Rico", name: "Puerto Rico", flag: "🇵🇷" },
  { label: "Iceland", name: "Iceland", flag: "🇮🇸" },
  { label: "Denmark", name: "Denmark", flag: "🇩🇰" },
  { label: "Sweden", name: "Sweden", flag: "🇸🇪" },
  { label: "Germany", name: "Germany", flag: "🇩🇪" },
  { label: "France", name: "France", flag: "🇫🇷" },
  { label: "Switzerland", name: "Switzerland", flag: "🇨🇭" },
  { label: "Ireland", name: "Ireland", flag: "🇮🇪" },
  { label: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { label: "Portugal", name: "Portugal", flag: "🇵🇹" },
  { label: "Morocco", name: "Morocco", flag: "🇲🇦" },
  { label: "Spain", name: "Spain", flag: "🇪🇸" },
  { label: "Croatia", name: "Croatia", flag: "🇭🇷" },
  { label: "Montenegro", name: "Montenegro", flag: "🇲🇪" },
  { label: "Australia", name: "Australia", flag: "🇦🇺" },
  { label: "Vatican", name: "Vatican City", flag: "🇻🇦" },
  { label: "Turkey", name: "Turkey", flag: "🇹🇷" },
] as const;

export default function AboutPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20 pb-20 pt-4 sm:pt-6 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-16 xl:gap-20">
          {/* Portrait */}
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative mx-auto aspect-square w-full max-w-[min(100%,340px)] lg:mx-0">
              <Image
                src="/clairepic.png"
                alt="Claire Wayand"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 340px"
                priority
              />
            </div>
          </div>

          {/* Copy */}
          <div className="min-w-0 text-left">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Hi, I&apos;m Claire <span className="inline-block">👋</span>
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-neutral-500 sm:text-2xl">
              I craft interfaces where business goals and user needs align.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <span className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800">
                <Monitor
                  className="h-7 w-7 shrink-0 text-neutral-600 sm:h-8 sm:w-8"
                  strokeWidth={1.75}
                  aria-hidden
                />
                BFA in Design, James Madison University
              </span>
              <span className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800">
                <Award
                  className="h-7 w-7 shrink-0 text-neutral-600 sm:h-8 sm:w-8"
                  strokeWidth={1.75}
                  aria-hidden
                />
                UX for B2B SaaS, mobile &amp; AI-assisted products
              </span>
            </div>

            <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
              <p>
                I&apos;ve spent{" "}
                <strong className="font-semibold text-neutral-900">
                  5+ years in UI/UX and product design
                </strong>
                , moving from marketing and brand work into owning flows for{" "}
                <strong className="font-semibold text-neutral-900">
                  complex SaaS products
                </strong>{" "}
                in construction tech and beyond. I thrive where research,
                systems, and craft meet — including{" "}
                <strong className="font-semibold text-neutral-900">
                  AI, mobile, and web
                </strong>{" "}
                surfaces that have to earn trust fast.
              </p>
              <p>
                I partner closely with product and engineering with a{" "}
                <strong className="font-semibold text-neutral-900">
                  product mindset
                </strong>
                : clear problem framing, measurable outcomes, and designs that
                ship. I aim to be someone you can rely on as a{" "}
                <strong className="font-semibold text-neutral-900">
                  owner, not just a designer
                </strong>
                — from discovery and prototyping through handoff and iteration.
              </p>
              <p>
                Outside of work I draw, travel, and recharge with friends,
                volleyball, and time with my dog — habits that keep me curious
                and grounded for the next product challenge.
              </p>
            </div>
          </div>
        </div>

        {/* Stats — centered */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-neutral-200 pt-16 text-center sm:grid-cols-3 sm:gap-8 lg:mt-20 lg:pt-20">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-neutral-500">
              Years experience
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              5+
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-neutral-500">
              Products &amp; major initiatives
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              15+
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-neutral-500">
              Industries served
            </p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              6+
            </p>
          </div>
        </div>

        {/* Activity photos — centered banner, hover scale, click to expand */}
        <div className="mt-16 border-t border-neutral-200 pt-16 lg:mt-20 lg:pt-20">
          <h2 className="mb-2 text-center text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
            Life outside the screen
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-center text-sm text-neutral-500 sm:text-base">
            Travel, art, and moments that keep me inspired — click any photo to
            view it larger.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            {ACTIVITY_PHOTOS.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
                className="group relative w-[calc(50%-0.375rem)] max-w-[180px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 sm:w-40 sm:max-w-none md:w-44"
                aria-label={`Open larger view: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.08] group-active:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Countries visited */}
        <div className="mt-16 border-t border-neutral-200 pt-16 lg:mt-20 lg:pt-20">
          <h2 className="text-center text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
            Countries I&apos;ve been to
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            23{" "}
            <span className="text-lg font-medium text-neutral-500 sm:text-xl">
              and counting
            </span>
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-neutral-500 sm:text-base">
            Every stamp is a story — from weekend hops to longer adventures.
          </p>
          <ul
            className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
            aria-label="Countries visited, with flags"
          >
            {COUNTRIES_VISITED.map((c) => (
              <li
                key={c.label}
                aria-label={c.name}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <span
                  className="select-none text-4xl leading-none sm:text-[2.75rem]"
                  aria-hidden
                >
                  {c.flag}
                </span>
                <span className="text-xs font-medium leading-tight text-neutral-800 sm:text-sm">
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={LIGHTBOX_SLIDES}
          on={{ view: ({ index: i }) => setLightboxIndex(i) }}
        />
      </main>
    </div>
  );
}
