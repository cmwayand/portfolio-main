"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Linkedin, Send } from "lucide-react";
import HeroPageShell from "@/components/HeroPageShell";

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
    <div className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <HeroPageShell>
        <div className="mx-auto max-w-4xl pb-12 sm:pb-16 md:pb-20">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-neutral-950 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Connect
          </h1>
          <p className="mb-8 text-base leading-relaxed text-neutral-600 sm:mb-10 sm:text-lg md:mb-12 md:text-xl">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a conversation about design and product development.
          </p>

          {/* Contact Form */}
          <div className="mb-12 rounded-2xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-950">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full border border-neutral-200 bg-white px-5 py-3 text-neutral-900 shadow-sm outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full border border-neutral-200 bg-white px-5 py-3 text-neutral-900 shadow-sm outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-neutral-900 shadow-sm outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-300 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
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
            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-neutral-950 p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-950">
                    Email
                  </h2>
                  <a
                    href="mailto:cmwayand@gmail.com"
                    className="text-lg text-neutral-700 transition-colors hover:text-neutral-950"
                  >
                    cmwayand@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-neutral-950 p-3">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-950">
                    LinkedIn
                  </h2>
                  <a
                    href="https://www.linkedin.com/in/clairewayand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-neutral-700 transition-colors hover:text-neutral-950"
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
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </HeroPageShell>
    </div>
  );
}
