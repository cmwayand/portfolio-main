import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";

/**
 * Same mesh gradient + max-width / horizontal padding as the home hero
 * so case studies sit in the same visual frame as the landing hero.
 */
export default function HeroPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      >
        <div
          className="absolute -top-32 left-[10%] h-[420px] w-[520px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(196, 181, 253, 0.55) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-24 right-[5%] h-[380px] w-[480px] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 207, 232, 0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(186, 230, 253, 0.45) 0%, transparent 68%)",
          }}
        />
      </div>

      <SiteHeader />

      <div className="relative z-10 mx-auto max-w-7xl pl-6 pr-10 pt-12 pb-20 sm:pl-10 sm:pr-14 sm:pb-24 sm:pt-16 md:pl-12 md:pr-20 md:pt-20 md:pb-28 lg:pl-16 lg:pr-24 lg:pt-24 xl:pl-20 xl:pr-28">
        {children}
      </div>
    </div>
  );
}
