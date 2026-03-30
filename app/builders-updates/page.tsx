"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProjectCarousel from "@/components/ProjectCarousel";
import HeroPageShell from "@/components/HeroPageShell";
import CaseStudyTitle from "@/components/CaseStudyTitle";

export default function BuildersUpdates() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Image gallery with captions, brief, and goal
  const galleryImages = [
    {
      src: "websitedesign.png",
      caption: "Web design work for CoConstruct/Buildertrend",
      brief: "Following the acquisition, I led the design of a high-conversion landing page to successfully transition the new brand into the Buildertrend ecosystem.",
      goal: "Goal information about this project"
    },
    {
      src: "learnconstruction.png",
      caption: "Learn Construction Software Page",
      brief: "Brief information about this project",
      goal: "Goal information about this project"
    },
    {
      src: "social1.jpg",
      caption: "Social media and graphics",
      brief: "Brief information about this project",
      goal: "Goal information about this project",
      carousel: [
        "social1.jpg",
        "social2.jpg",
        "social3.PNG",
        "social4.jpg",
        "social5.jpg",
        "social6.jpg",
        "socialpage.PNG"
      ]
    },
    // Add more images here as needed
    // {
    //   src: "image2.png",
    //   caption: "Description of work",
    //   brief: "Brief text",
    //   goal: "Goal text"
    // },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-neutral-900">
      <HeroPageShell>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-[#0E4D88] hover:underline mb-8 inline-block">← Back to Home</Link>
          
          {/* Header */}
          <div className="mb-12">
            <CaseStudyTitle>
              Marketing, Web Design and Digital Graphics
            </CaseStudyTitle>
            <p className="text-xl text-gray-600 mb-6">February 2021 - Present</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,243,199,0.5)]">Marketing</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(209,250,229,0.5)]">Web Design</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(219,234,254,0.5)]">Social Media</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(233,213,255,0.5)]">Graphics</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,243,199,0.5)]">Figma</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(209,250,229,0.5)]">User Research</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(219,234,254,0.5)]">UX/UI Design</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(233,213,255,0.5)]">Prototyping</span>
            </div>
          </div>

          {/* Image Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2A78C0' }}>Buildertrend and CoConstruct Marketing Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lightbox */}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={0}
            slides={(() => {
              const currentImage = galleryImages[lightboxIndex];
              if (!currentImage) {
                return [{
                  src: "",
                  description: ""
                }];
              }
              if (currentImage.carousel) {
                return currentImage.carousel.map((imgSrc) => ({
                  src: imgSrc,
                  description: currentImage.caption
                }));
              }
              return [{
                src: currentImage.src || "",
                description: currentImage.caption || ""
              }];
            })()}
            render={{
              slide: ({ slide, rect }) => {
                const currentImage = galleryImages[lightboxIndex];
                return (
                  <div className="flex flex-col items-center justify-start overflow-y-auto" style={{ width: rect.width, height: '95vh', maxHeight: '95vh', paddingTop: '2rem' }}>
                    <div className="max-w-5xl w-full mx-auto px-4 py-4">
                      {currentImage?.src === "learnconstruction.png" ? (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: '#0E4D88' }}>Before</h3>
                              <img 
                                src="beforeco.png" 
                                alt="Before" 
                                className="w-full h-auto rounded-lg"
                              />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: '#0E4D88' }}>After</h3>
                              <img 
                                src="learnconstruction.png" 
                                alt="After" 
                                className="w-full h-auto rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-6 space-y-4">
                            <div>
                              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4D88' }}>Hypothesis</h3>
                              <p className="text-gray-700">Updating the UI to modern brand standards and replacing the &quot;back-to-home&quot; navigation loop with in-line breadcrumb controls will significantly reduce user friction.</p>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4D88' }}>The Problem</h3>
                              <p className="text-gray-700">The legacy UI was outdated and forced a &quot;pogo-sticking&quot; behavior: users had to return to the main landing page to switch between feature categories, disrupting their learning flow.</p>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4D88' }}>The Solution</h3>
                              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li><strong>Modernized UI:</strong> Refreshed the page to align with current web and brand standards.</li>
                                <li><strong>Dynamic Breadcrumbs:</strong> Integrated a category-switch dropdown directly into the breadcrumb trail, allowing users to pivot between sections instantly.</li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4D88' }}>Impact & Results</h3>
                              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li><strong>34% Reduction in Time-to-Task:</strong> Users now navigate directly to content without redundant page loads.</li>
                                <li><strong>Streamlined UX:</strong> Improved information architecture that keeps users in their &quot;flow&quot; state rather than forcing them back to the start.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={slide.src} 
                          alt={currentImage?.caption || ""}
                          className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
                        />
                      )}
                    </div>
                  </div>
                );
              }
            }}
          />
        </div>
      </HeroPageShell>

      <ProjectCarousel currentPath="/builders-updates" />
    </div>
  );
}
