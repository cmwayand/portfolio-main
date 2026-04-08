"use client";

import SiteHeader from "@/components/SiteHeader";
import MeshGradient from "@/components/MeshGradient";

interface CaseStudyPasswordGateProps {
  password: string;
  onPasswordChange: (value: string) => void;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
}

/** Password screen styled like the home hero: mesh gradient, black title, dark CTA. */
export default function CaseStudyPasswordGate({
  password,
  onPasswordChange,
  error,
  onSubmit,
}: CaseStudyPasswordGateProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="relative overflow-hidden bg-white">
        <MeshGradient />

        <SiteHeader />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-8 sm:px-10 sm:pb-24 sm:pt-12 md:px-12 md:pb-28 md:pt-16 lg:px-16 lg:pt-20 xl:px-20">
          <div className="w-full max-w-md rounded-2xl border border-neutral-200/80 bg-white/90 p-8 shadow-sm backdrop-blur-sm sm:p-10">
            <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
              Password required
            </h1>
            <p className="mt-4 text-center text-base leading-relaxed text-neutral-600">
              This page is password protected. Enter the password to continue.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="case-study-gate-password" className="sr-only">
                  Password
                </label>
                <input
                  id="case-study-gate-password"
                  type="password"
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="w-full rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  autoFocus
                />
              </div>

              {error ? (
                <p className="text-center text-sm text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="relative inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-neutral-950 px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
              >
                Access page
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
