"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Linkedin, Send } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-neutral-900">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ color: '#0E4D88' }}>
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about design and product development.
          </p>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0E4D88' }}>Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4D88] focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4D88] focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4D88] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 text-white rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: '#0E4D88' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you! Your message has been sent. I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  Something went wrong. Please try again or email me directly at cmwayand@gmail.com
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#0E4D88' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#0E4D88' }}>Email</h2>
                  <a 
                    href="mailto:cmwayand@gmail.com" 
                    className="text-lg text-gray-700 hover:text-[#0E4D88] transition-colors duration-300"
                  >
                    cmwayand@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#0E4D88' }}>
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#0E4D88' }}>LinkedIn</h2>
                  <a 
                    href="https://www.linkedin.com/in/clairewayand/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-[#0E4D88] transition-colors duration-300"
                  >
                    linkedin.com/in/clairewayand
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link 
              href="/" 
              className="text-[#0E4D88] hover:underline inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
