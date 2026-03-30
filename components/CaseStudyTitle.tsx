import type { ReactNode } from "react";

/** Case study H1 — solid black, compact scale. */
export default function CaseStudyTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mb-6 text-balance text-lg font-bold leading-[1.12] tracking-tight text-neutral-950 md:text-2xl md:leading-[1.12] lg:text-3xl">
      {children}
    </h1>
  );
}
