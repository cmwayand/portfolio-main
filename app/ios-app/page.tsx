"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, Sparkles, Box, Layout, Link2 } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProjectCarousel from "@/components/ProjectCarousel";
import HeroPageShell from "@/components/HeroPageShell";
import CaseStudyTitle from "@/components/CaseStudyTitle";

export default function IOSApp() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All images on the page for unified lightbox
  const allImages = [
    { src: "/roomsparkcover.png", alt: "RoomSpark iOS app cover" },
    { src: 'roomsparkcompetitoranalysis.png', alt: 'RoomSpark competitor analysis' },
    { src: 'roomsparkwireframes.png', alt: 'RoomSpark wireframes' },
    { src: 'roomsparklanding.png', alt: 'RoomSpark landing page' },
    { src: 'newui.png', alt: 'New UI' },
    { src: 'oldui.png', alt: 'Old UI' },
    { src: "/roomsparksite.png", alt: "RoomSpark website" },
  ];

  const openLightbox = (imageSrc: string) => {
    const index = allImages.findIndex(img => img.src === imageSrc);
    if (index !== -1) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-neutral-900">
      <HeroPageShell>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-[#0E4D88] hover:underline mb-8 inline-block">← Back to Home</Link>
          
          {/* Header */}
          <div className="mb-12">
            <CaseStudyTitle>
              RoomSpark: Defining the Standard for the $830B Home
              Transformation Industry.
            </CaseStudyTitle>
            <p className="text-xl text-gray-600 mb-6">April 2025 - Present</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,243,199,0.5)]">Figma</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(209,250,229,0.5)]">SwiftUI</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(219,234,254,0.5)]">AI/ML Integration</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(233,213,255,0.5)]">3D Rendering</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(252,231,243,0.5)]">User Research</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,215,170,0.5)]">Prototyping</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(233,213,255,0.5)]">Roadmaps</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img 
              src="/roomsparkcover.png" 
              alt="RoomSpark iOS app" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox("/roomsparkcover.png")}
            />
          </div>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                RoomSpark is an innovative iOS application that leverages AI technology to help users design and transform their living spaces. The app combines cutting-edge artificial intelligence with intuitive user experience design to bring interior design visions to life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As the lead designer on this project, I've been responsible for creating a seamless, user-friendly interface that makes complex AI-powered design tools accessible to everyday users. The challenge was to bridge the gap between advanced technology and intuitive usability.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>Team</h3>
                  <p className="text-gray-700">Product designer<br />Developer</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>My Role</h3>
                  <p className="text-gray-700">Product designer, leading discovery, implementation, prototyping, user feedback, entire product lifecycle</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>Company</h3>
                  <p className="text-gray-700">RoomSpark</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>Impact</h3>
                  <p className="text-gray-700">Saving people weeks of design time and thousands of dollars.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6" style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>AI-Powered Room Design</h3>
                </div>
                <p className="text-gray-700">
                  Advanced AI algorithms analyze room dimensions, lighting, and user preferences to generate personalized design recommendations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Box className="w-6 h-6" style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>3D Visualization</h3>
                </div>
                <p className="text-gray-700">
                  Real-time 3D rendering allows users to see their design concepts come to life before making any physical changes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Layout className="w-6 h-6" style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>Intuitive Interface</h3>
                </div>
                <p className="text-gray-700">
                  Streamlined user experience that makes complex design tools accessible to users of all technical skill levels.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Link2 className="w-6 h-6" style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>Seamless Integration</h3>
                </div>
                <p className="text-gray-700">
                  Connect with furniture retailers, contractors, and design professionals directly through the app.
                </p>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Design Process</h2>
            <div className="space-y-6">
              <div className="border-l-4 pl-6" style={{ borderColor: '#0E4D88' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E4D88' }}>Research & Discovery</h3>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: '#0E4D88' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E4D88' }}>Wireframing & Prototyping</h3>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: '#0E4D88' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E4D88' }}>UI Design & Iteration</h3>
              </div>
              <div className="border-l-4 pl-6" style={{ borderColor: '#0E4D88' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E4D88' }}>Development Collaboration</h3>
              </div>
            </div>
            <div className="mt-16">
              <img 
                src="roomsparkcompetitoranalysis.png" 
                alt="RoomSpark competitor analysis" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover h-64 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('roomsparkcompetitoranalysis.png')}
              />
            </div>
          </section>

          {/* Research and Discovery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Research and Discovery</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                I conducted an expansive competitor analysis, synthesizing App Store reviews, interface teardowns, and community discussions on Reddit. By mapping out common user frustrations, I identified four critical market gaps:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-6 space-y-3 ml-4">
                <li><strong>Lack of Visualization:</strong> Users couldn't "bring the room to life" in a real, tangible way.</li>
                <li><strong>Budget Constraints:</strong> Difficulty managing costs during the design process.</li>
                <li><strong>Spatial Uncertainty:</strong> Users struggled to visualize scale and fit.</li>
                <li><strong>Paralysis of Choice:</strong> A clear lack of guidance on where to begin.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                These insights directly defined my feature roadmap and prioritized the core problems my solution needed to solve.
              </p>
            </div>
          </section>

          {/* Wireframing & Prototyping */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Wireframing & Prototyping</h2>
            <div className="mt-8 mb-6">
              <img 
                src="roomsparkwireframes.png" 
                alt="RoomSpark wireframes" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover h-64 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('roomsparkwireframes.png')}
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                To establish the MVP (Minimum Viable Product), I wireframed a simplified workflow centered on four key steps: Capture, Generate, View, and Purchase. By linking the generated designs to a list of shoppable products via Amazon's affiliate program, I ensured the design solved a user problem while serving as a functional revenue-generating platform.
              </p>
            </div>
            
            {/* Project Challenge Banner */}
            <div className="mt-8 p-8 rounded-lg" style={{ backgroundColor: '#FEF3C7' }}>
              <div className="flex items-start gap-3">
                <Info size={20} className="mt-1 flex-shrink-0" style={{ color: '#0E4D88' }} />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>The Challenge:</strong> Amazon Affiliate account closure due to strict 180-day '3-sale' rules. <strong>The Action:</strong> Proactively audited and re-engineered the affiliate workflow to ensure full compliance and a successful restart.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gathering interest before launch */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Gathering Interest with a Landing Page</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                To validate market demand, I launched a pre-launch landing page with a Zoho-integrated CRM waitlist. This strategy allowed me to measure authentic user interest and build early momentum before finalizing the build.
              </p>
            </div>
            <div className="mt-8">
              <img 
                src="roomsparklanding.png" 
                alt="RoomSpark landing page" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover h-96 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('roomsparklanding.png')}
              />
            </div>
          </section>

          {/* UI Design and Iteration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>UI Design and Iteration</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The next step was a full UI refresh. The interface evolved significantly improving clarity and usability, while I simultaneously built a feature roadmap to break our larger vision into focused, shippable releases. Below is the updated UI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0E4D88' }}>Before</h3>
                <div
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox('newui.png')}
                >
                  <img
                    src="newui.png"
                    alt="New UI"
                    className="w-full rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0E4D88' }}>After</h3>
                <div
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox('oldui.png')}
                >
                  <img
                    src="oldui.png"
                    alt="Old UI"
                    className="w-full rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none mt-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This updated UI, designed in parallel with the product roadmap, helped us visualize how each feature works together as a cohesive system. The result is a more transparent, intuitive, and trustworthy experience for users.
              </p>
              
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2A78C0' }}>Next Steps</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We broke the roadmap into clear, high-impact release phases to ensure fast validation and steady momentum:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3 ml-4">
                <li><strong>MVP:</strong> Upload and capture photos with AI-generated room designs and product suggestions</li>
                <li><strong>App Store Launch:</strong> Begin real-world user testing and feedback collection</li>
                <li><strong>Website Launch:</strong> Introduce the product and onboarding flow</li>
                <li><strong>UI Refresh + Paywall:</strong> Support monetization and premium features</li>
                <li><strong>Room Scanning Integration:</strong> Add precise room measurements via scanning API</li>
                <li><strong>Feature Refinement:</strong> Polish interactions and improve overall performance</li>
              </ul>
            </div>
            <div className="mt-8">
              <div className="flex justify-center mb-8 py-4">
                <a
                  href="https://www.roomspark.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 text-white"
                  style={{ backgroundColor: '#0D7771' }}
                >
                  View site
                </a>
              </div>
              <img 
                src="/roomsparksite.png" 
                alt="RoomSpark website" 
                className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox("/roomsparksite.png")}
              />
            </div>
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={allImages}
            />
          </section>
        </div>
      </HeroPageShell>

      <ProjectCarousel currentPath="/ios-app" />
    </div>
  );
}
