"use client";

import Link from "next/link";

interface Project {
  title: string;
  coverImage: string;
  href: string;
}

interface ProjectCarouselProps {
  currentPath: string;
}

const allProjects: Project[] = [
  {
    title:
      "RoomSpark: Defining the Standard for the $830B Home Transformation Industry.",
    coverImage: "/roomsparkcover.png",
    href: "/ios-app",
  },
  {
    title: "How I Saved Builders 115 Hours & Improved Completion Time by 97%",
    coverImage: "coverclientupdates.png",
    href: "/saving-builders",
  },
  {
    title: "Improving the client dashboard and reducing churn by 28%",
    coverImage: "/dashboard.png",
    href: "/client-dashboard",
  },
  {
    title: "Marketing, Web Design and Digital Graphics",
    coverImage: "websitedesign.png",
    href: "/builders-updates",
  },
];

export default function ProjectCarousel({ currentPath }: ProjectCarouselProps) {
  // Filter out the current project
  const otherProjects = allProjects.filter((project) => project.href !== currentPath);

  return (
    <section className="border-t border-neutral-200 bg-neutral-50/80 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
          View my other work
        </h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ width: "fit-content" }}>
            {otherProjects.map((project) => (
              <div key={project.href} className="w-80 shrink-0">
                <Link
                  href={project.href}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                >
                  <div className="cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="line-clamp-2 text-lg font-bold leading-snug text-neutral-950">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
