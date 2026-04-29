"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Calendar, MessageSquare, ExternalLink } from "lucide-react";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME || "flockrlabs";
const CAL_EVENT_SLUG = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG || "strategy-call";
const CAL_URL = `https://cal.com/${CAL_USERNAME}/${CAL_EVENT_SLUG}`;
import { SuccessModal } from "@/components/success-modal";
import { CalEmbed } from "@/components/cal-embed";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot — humans don't fill this
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
        setIsSuccessModalOpen(true);
      } else {
        console.error("Form submission error:", data);
        setSubmitStatus("error");
        // Store error message for display
        if (data.message) {
          console.error("Error message:", data.message);
        }
        if (data.details) {
          console.error("Error details:", data.details);
        }
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-slate-100 mb-6 transition-colors">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors">
            Book a call, send a message, or both — we&apos;ll get back fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Cal.com Booking - left column on lg+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 md:p-8 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 transition-colors">
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  Book a strategy call
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </h2>
            </div>
            <CalEmbed height={640} />
          </motion.div>

          {/* Contact Form - right column on lg+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 md:p-8 transition-colors"
          >
            <div className="flex items-start gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors">
                <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 transition-colors">
                  Send a message
                </h2>
                <p className="text-sm text-gray-500 dark:text-slate-400 transition-colors mt-1">
                  Not ready to book? Drop us a note. Typical response: a few hours during business days.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot — hidden from humans, bots will fill it */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
                <label htmlFor="website">Website (leave empty)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-slate-100 mb-2 transition-colors"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-slate-100 mb-2 transition-colors"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 dark:text-slate-100 mb-2 transition-colors"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-slate-100 mb-2 transition-colors"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-slate-100 bg-white dark:bg-slate-800 placeholder:text-gray-400 dark:placeholder:text-slate-500"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300 transition-colors">
                  <span>
                    There was an error sending your message. Please try again or
                    email us directly at flockr@flockrlabs.com
                  </span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Email fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-sm text-gray-500 dark:text-slate-400 transition-colors"
        >
          Prefer email?{" "}
          <a
            href="mailto:flockr@flockrlabs.com"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            flockr@flockrlabs.com
          </a>
          {" · "}
          <span className="text-gray-400 dark:text-slate-500">Flockr Labs LLC</span>
        </motion.p>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </main>
  );
}
