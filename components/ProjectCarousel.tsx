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
    <section className="px-[100px] py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#0E4D88' }}>View my other work:</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ width: 'fit-content' }}>
            {otherProjects.map((project) => (
              <div
                key={project.href}
                className="flex-shrink-0 w-80"
              >
                <Link href={project.href} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
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
