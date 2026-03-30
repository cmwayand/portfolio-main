"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProjectCarousel from "@/components/ProjectCarousel";
import HeroPageShell from "@/components/HeroPageShell";
import CaseStudyTitle from "@/components/CaseStudyTitle";
import { CASE_STUDY_GATE_PASSWORD } from "@/lib/caseStudyGate";

export default function ClientDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All images on the page for unified lightbox
  const allImages = [
    { src: '/dashboard.png', alt: 'Client dashboard cover' },
    { src: 'data.png', alt: 'Data visualization' },
    { src: 'interviews1.png', alt: 'User interviews' },
    { src: 'interviewsphotos.png', alt: 'Interview photos' },
    { src: 'wordbank1.png', alt: 'Word bank activity 1' },
    { src: 'wordbank2.png', alt: 'Word bank activity 2' },
    { src: 'wordbank3.png', alt: 'Word bank activity 3' },
    { src: 'wireframes1.png', alt: 'Wireframes 1' },
    { src: 'wireframes2.png', alt: 'Wireframes 2' },
    { src: 'wireframetwo.png', alt: 'Wireframes two' },
    { src: 'wireframethree.png', alt: 'Wireframes three' },
    { src: 'finalclientdashboard.png', alt: 'Final client dashboard' },
    { src: 'clientportal.png', alt: 'Client portal' },
    { src: 'clientportal2.png', alt: 'Client portal 2' },
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
    const authStatus = localStorage.getItem('client_dashboard_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === CASE_STUDY_GATE_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('client_dashboard_authenticated', 'true');
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
          <a href="/" className="text-[#0E4D88] hover:underline mb-8 inline-block">← Back to Home</a>
          
          {/* Header */}
          <div className="mb-12">
            <CaseStudyTitle>
              Improving the client dashboard and reducing churn by 28%
            </CaseStudyTitle>
            <p className="text-xl text-gray-600 mb-6">November 2023 - February 2024</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,243,199,0.5)]">Figma</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(209,250,229,0.5)]">User Research</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(219,234,254,0.5)]">Wireframing</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(233,213,255,0.5)]">User interviews</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(252,231,243,0.5)]">Hi-fidelity prototypes</span>
              <span className="px-4 py-2 rounded-full text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-[rgba(254,215,170,0.5)]">Research</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <img 
              src="/dashboard.png" 
              alt="Client dashboard project" 
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover h-96 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox('/dashboard.png')}
            />
          </div>

          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Reimagined the client dashboard to prioritize intuitive navigation and functional efficiency, directly increasing platform trust and user satisfaction for both builders and clients
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
                  <p className="text-gray-700">
                    Reduced churn by 28%, and improved client satisfaction<br />
                    To-Dos saw a 42% increase in completion time.<br />
                    Invoices were paid 23% faster
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problem & Opportunity */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Problem & Opportunity</h2>
            <div className="prose prose-lg max-w-none">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#0E4D88' }}>The Problem</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The current client summary dashboard is outdated and lacks clear calls to action, often leaving new users staring at a confusing, empty state.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#0E4D88' }}>The Opportunity</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Transform the dashboard into an engaging, visually polished hub that reinforces the builder's professionalism from day one.
                </p>
              </div>
            </div>
          </section>

          {/* Discovery & Research */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Discovery & Research</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                During discovery, we interviewed homeowners for the first time and uncovered a critical insight: the homeowner experience depends entirely on how engaged their builder is with the platform.
              </p>
            </div>
            <div className="mt-8">
              <img 
                src="data.png" 
                alt="Data visualization" 
                className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('data.png')}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img 
                src="interviews1.png" 
                alt="User interviews" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('interviews1.png')}
              />
              <img 
                src="interviewsphotos.png" 
                alt="Interview photos" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('interviewsphotos.png')}
              />
            </div>
          </section>

          {/* The Word Bank Activity */}
          <section className="mb-16">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#0E4D88' }}>The Word Bank Activity</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To bridge the gap between qualitative interviews and functional design, I developed a Word Bank Activity. I asked 20–30 customers to rank their top six most-checked items when logging into Buildertrend.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openLightbox('wordbank1.png')}
              >
                <img
                  src="wordbank1.png"
                  alt="Word bank activity 1"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
              <div
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openLightbox('wordbank2.png')}
              >
                <img
                  src="wordbank2.png"
                  alt="Word bank activity 2"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
              <div
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openLightbox('wordbank3.png')}
              >
                <img
                  src="wordbank3.png"
                  alt="Word bank activity 3"
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </section>

          {/* Themes & Opportunity Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Themes & Opportunity Areas</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We organized our research findings into four key themes to guide the redesign:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-4 ml-4">
                <li><strong>Builder Participation & Sharing:</strong> Builders often fail to share sufficient data with homeowners, limiting the platform's value.</li>
                <li><strong>Customization:</strong> Users require the ability to customize notification settings and control what information is visible to the customer.</li>
                <li><strong>Summary Improvements:</strong> The existing summary page is outdated and leaves clients feeling lost regarding how to use the tool.</li>
                <li><strong>Onboarding:</strong> There is a lack of education for clients; without proper onboarding, they remain unsure of the platform's functionality.</li>
              </ul>
            </div>
          </section>

          {/* Wireframes & Mockups */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Wireframes & Mockups</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Following the word bank activity and data validation, I began creating rough wireframes to explore layout possibilities. While the team navigated technical constraints, we maintained a continuous feedback loop:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-3 ml-4">
                <li><strong>Iterative Testing:</strong> Clients reviewed wireframes and low-fi prototypes.</li>
                <li><strong>Refinement:</strong> Designs were adjusted based on direct user input to ensure the most relevant information stood out.</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img 
                src="wireframes1.png" 
                alt="Wireframes 1" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('wireframes1.png')}
              />
              <img 
                src="wireframes2.png" 
                alt="Wireframes 2" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('wireframes2.png')}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <img 
                src="wireframetwo.png" 
                alt="Wireframes two" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('wireframetwo.png')}
              />
              <img 
                src="wireframethree.png" 
                alt="Wireframes three" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('wireframethree.png')}
              />
            </div>
          </section>

          {/* Hi-fidelity Mockups and Testing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Hi-fidelity Mockups and Testing</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After refining our initial concepts, we developed high-fidelity mockups and re-engaged our research participants for a round of rigorous usability testing. The feedback was overwhelmingly positive:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-4 ml-4">
                <li><strong>Improved Discoverability:</strong> Clients reported that the new interface was intuitive and that they no longer struggled to locate key project details.</li>
                <li><strong>Feature Visibility:</strong> Better alignment and information hierarchy allowed more features to be surfaced without overwhelming the user.</li>
                <li><strong>Real-Time Transparency:</strong> Users highly valued the shift toward "real-time" updates, which provided immediate clarity on project status.</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <img 
                src="finalclientdashboard.png" 
                alt="Final client dashboard" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('finalclientdashboard.png')}
              />
              <img 
                src="clientportal.png" 
                alt="Client portal" 
                className="w-full rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('clientportal.png')}
              />
            </div>
          </section>

          {/* Business Impact & Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#2A78C0' }}>Business Impact & Results</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0E4D88' }}>Final Solution: A Premier Construction Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The redesigned client portal transforms the homeowner journey from a confusing "empty state" into a high-trust, data-rich environment.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-4 ml-4">
                <li><strong>Reduced Churn:</strong> Customer churn decreased by 28% following the update.</li>
                <li><strong>To-Dos saw a 42% increase in completion time.</strong></li>
                <li><strong>Invoices were paid 23% faster.</strong></li>
                <li><strong>Lasting Praise:</strong> Months after the initial launch, the new client experience continues to receive consistent praise from the user base.</li>
              </ul>
            </div>
            <div className="mt-8">
              <img 
                src="clientportal2.png" 
                alt="Client portal 2" 
                className="w-full max-w-5xl mx-auto rounded-lg shadow-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox('clientportal2.png')}
              />
            </div>
          </section>
        </div>

        {/* Unified Lightbox for all images */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={allImages}
        />
      </HeroPageShell>

      <ProjectCarousel currentPath="/client-dashboard" />
    </div>
  );
}
