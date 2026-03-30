"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProjectCarousel from "@/components/ProjectCarousel";
import HeroPageShell from "@/components/HeroPageShell";
import CaseStudyTitle from "@/components/CaseStudyTitle";
import { Sparkles, Clock, MessageCircle, Workflow } from "lucide-react";
import { CASE_STUDY_GATE_PASSWORD } from "@/lib/caseStudyGate";

export default function SavingBuilders() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All images on the page for unified lightbox
  const allImages = [
    { src: 'coverclientupdates.png', alt: 'Saving builders project cover' },
    { src: 'userstories.png', alt: 'User stories' },
    { src: '2.png', alt: 'Wireframe 2' },
    { src: '3.png', alt: 'Wireframe 3' },
    { src: '5.png', alt: 'Wireframe 5' },
    { src: 'clientupdatefeed.png', alt: 'Client update feed' },
    { src: 'iphoneclientupdate.png', alt: 'iPhone client update' },
    { src: 'updatesfeed.png', alt: 'Updates feed' },
    { src: 'firstdraft.png', alt: 'First draft' },
    { src: 'finalversion.png', alt: 'Final version' },
    { src: 'clientupdate1.png', alt: 'Client update 1' },
    { src: 'clientupdate2.png', alt: 'Client update 2' },
    { src: 'clientupdatebuilder.png', alt: 'Client update builder' },
  ];

  const openLightbox = (imageSrc: string) => {
    const index = allImages.findIndex(img => img.src === imageSrc);
    if (index !== -1) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  // Check if already authenticated on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('saving_builders_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === CASE_STUDY_GATE_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('saving_builders_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center" style={{ color: '#0E4D88' }}>Password Required</h1>
            <p className="text-gray-600 mb-6 text-center">
              This page is password protected. Please enter the password to continue.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white text-black focus:outline-none"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#0E4D88';
                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(14, 77, 136, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                  autoFocus
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              
              <button
                type="submit"
                className="w-full px-4 py-2 text-white rounded-lg transition-colors"
                style={{ backgroundColor: '#0E4D88' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a3d6b'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0E4D88'}
              >
                Access Page
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated content
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-neutral-900">
      <HeroPageShell>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-[#0E4D88] hover:underline mb-8 inline-block">← Back to Home</Link>
          
          {/* Header */}
          <div className="mb-12">
            <CaseStudyTitle>
              How I Saved Builders 115 Hours & Improved Completion Time by 97%
            </CaseStudyTitle>
            <p className="text-xl text-gray-600 mb-6">August 2024 - January 2025</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,243,199,0.5)]">Figma</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(209,250,229,0.5)]">User Research</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(219,234,254,0.5)]">AI Integration</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(233,213,255,0.5)]">Prototyping</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(252,231,243,0.5)]">A/B Testing</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img 
              src="coverclientupdates.png" 
              alt="Saving builders project" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox('coverclientupdates.png')}
            />
          </div>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Using AI to generate automatic updates for clients, improving communication, and saving them 6+ hours a week.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>Team</h3>
                  <p className="text-gray-700">
                    Product manager<br />
                    Product designer<br />
                    Engineering<br />
                    QA
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>My Role</h3>
                  <p className="text-gray-700">Product designer</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>Company</h3>
                  <p className="text-gray-700">Buildertrend</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#0E4D88' }}>Impact</h3>
                  <p className="text-gray-700">Saved builders a combined 115 hours and improved completion time by 97%</p>
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
                  <Sparkles size={24} style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>AI-Powered Updates</h3>
                </div>
                <p className="text-gray-700">
                  Automated generation of client updates using AI technology to streamline communication.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>Time Savings</h3>
                </div>
                <p className="text-gray-700">
                  Significantly reduced time spent on client communication, saving builders 6+ hours per week.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle size={24} style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>Improved Communication</h3>
                </div>
                <p className="text-gray-700">
                  Enhanced client relationships through consistent, timely, and professional updates.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Workflow size={24} style={{ color: '#0E4D88' }} />
                  <h3 className="text-xl font-semibold" style={{ color: '#0E4D88' }}>Streamlined Workflow</h3>
                </div>
                <p className="text-gray-700">
                  We simplified the process for builders, allowing them to approve or edit automatic updates before sending to their clients.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://buildertrend.com/blog/client-portal-updates/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 text-white"
                style={{ backgroundColor: '#0E4D88' }}
              >
                See it on Buildertrend
              </a>
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
          </section>

          {/* Research and Discovery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Research and Discovery</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After interviewing 20 customers, we mapped key decision points across the client update experience and wrote user stories from both the builder and homeowner perspectives.
              </p>
              <div className="mt-8 mb-6">
                <img 
                  src="userstories.png" 
                  alt="User stories" 
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox('userstories.png')}
                />
              </div>
              <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#0E4D88' }}>Key Insights</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3 ml-4 mb-6">
                <li><strong>Builders prioritize speed and accuracy.</strong><br />
                As a builder, I want updates prepared automatically so I can review and publish them quickly.</li>
                <li><strong>Control still matters.</strong><br />
                As a builder, I want to choose what's included so clients receive accurate information.</li>
                <li><strong>Homeowners want clarity at a glance.</strong><br />
                As a homeowner, I want to know what happened, what's next, and what I need to do.</li>
              </ul>
              <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#0E4D88' }}>Design Decisions</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3 ml-4 mb-6">
                <li>Used AI-generated updates with a review-and-edit step for builders.</li>
                <li>Designed a full-page editing experience to easily review text and photos in one place.</li>
                <li>Structured updates to clearly surface past progress, upcoming work, and action items for homeowners.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                These decisions shaped how we organized creating, managing, and viewing updates, as reflected in the designs below.
              </p>
            </div>
          </section>

          {/* Wireframing & Prototyping */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Wireframing & Prototyping</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Hypothesis:</strong> A single-page layout will outperform a multi-step stepper by reducing friction and speeding up edits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Test A/B testing:</strong> Single-page vs. Stepper flows and Manual vs. Assisted creation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Outcome</strong> Single-page won. Users completed updates faster, preferring the consolidated view and flexible photo selection.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {['2.png', '3.png', '5.png'].map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image}
                      alt={`Wireframe ${index === 0 ? '2' : index === 1 ? '3' : '5'}`}
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                  </div>
                ))}
              </div>
              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={allImages}
                index={lightboxIndex}
              />
            </div>
          </section>

          {/* Mobile */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Mobile</h2>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-4 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Goal</strong> Provide seamless project visibility for builders and clients on the go.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Execution</strong> Integrated updates directly into the Daily Log feed, surfacing project momentum where users already work.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Impact</strong> Increased engagement by making updates accessible in the field, ensuring critical project data is always at their fingertips.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img 
                  src="clientupdatefeed.png" 
                  alt="Mobile view 1" 
                  className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox('clientupdatefeed.png')}
                />
                <img 
                  src="iphoneclientupdate.png" 
                  alt="Mobile view 2" 
                  className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox('iphoneclientupdate.png')}
                />
              </div>
            </div>
          </section>

          {/* Development and Collaboration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Development and Collaboration</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We partnered with developers to build an AI-driven workflow. The system automatically curates all project activity from the prior week, generating a draft every Friday. This gives builders a dedicated window to review and polish the content before it is dispatched to clients every Monday.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#0E4D88' }}>Visual Validation</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>AI Curation (Image 2 & 4):</strong> The platform automatically pulls "Upcoming items" and "Past items"—like framing inspections and deliveries—directly into the draft for builder review.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <img 
                      src="updatesfeed.png" 
                      alt="Updates feed" 
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openLightbox('updatesfeed.png')}
                    />
                    <img 
                      src="firstdraft.png" 
                      alt="First draft" 
                      className="w-full rounded-lg shadow-md object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openLightbox('firstdraft.png')}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>Media Management:</strong> We tested large-grid thumbnail views (Image 3) against a structured management step (Image 5) to see which allowed for faster photo auditing.
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>Final Review (Image 1):</strong> The end result is a polished, client-facing summary that combines AI-selected photos, progress notes, and schedule updates in one cohesive view.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="finalversion.png" 
                      alt="Final Review" 
                      className="w-full max-w-4xl mx-auto rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox('finalversion.png')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Update Images */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox('clientupdate1.png')}
                >
                  <img
                    src="clientupdate1.png"
                    alt="Client update 1"
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Builders can select photos to include in the update, anything that was added in the last week will show up here. They can also use AI to generate a summary of notes and preview the update before they approve.
                </p>
              </div>
              <div>
                <div
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox('clientupdate2.png')}
                >
                  <img
                    src="clientupdate2.png"
                    alt="Client update 2"
                    className="w-full rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Improved and added features like weather, likes, comments, and documents.
                </p>
              </div>
              <div
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openLightbox('clientupdatebuilder.png')}
              >
                <img
                  src="clientupdatebuilder.png"
                  alt="Client update builder"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Impact and Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Impact and Results</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                From Beta to Global Launch We scaled from 30 to 150+ beta testers, iteratively refining the tool based on real-time feedback before a successful General Availability (GA) launch.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#0E4D88' }}>Key Results</h3>
              
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-4 ml-4 mb-8">
                <li><strong>Massive Efficiency:</strong> Builders report saving 6+ hours every week on project administration.</li>
                <li><strong>High Engagement:</strong> New features like "Update Liking," "View Receipts," and "Live Project Status" turned static reports into active communication hubs.</li>
                <li><strong>Strategic Retention:</strong> The AI-automated workflow became a "must-have" feature, successfully preventing churn to competitors by locking in user value.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#0E4D88' }}>User Sentiment</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4" style={{ borderColor: '#0E4D88' }}>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "The automated update has completely changed my Friday. What used to take days now happens in minutes."
                </p>
              </div>
            </div>
          </section>
        </div>
      </HeroPageShell>

      <ProjectCarousel currentPath="/saving-builders" />
    </div>
  );
}
