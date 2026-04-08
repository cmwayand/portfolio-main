import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import MeshGradient from "@/components/MeshGradient";

/**
 * Same mesh gradient + max-width / horizontal padding as the home hero.
 */
export default function HeroPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white text-neutral-900">
      <MeshGradient />

      <SiteHeader />

      <div className="relative z-10 mx-auto max-w-7xl pl-6 pr-10 pt-12 pb-20 sm:pl-10 sm:pr-14 sm:pb-24 sm:pt-16 md:pl-12 md:pr-20 md:pt-20 md:pb-28 lg:pl-16 lg:pr-24 lg:pt-24 xl:pl-20 xl:pr-28">
        {children}
      </div>
    </div>
  );
}
