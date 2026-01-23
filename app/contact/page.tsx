"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Mail } from "lucide-react";
import { SuccessModal } from "@/components/success-modal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
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
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-slate-100 mb-6 transition-colors">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            Tell us about your business and what you need help with. We typically respond within a few hours during business days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-8 transition-colors"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 transition-colors">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors">
                  Fill out the form or shoot us an email directly. Either way, we&apos;ll get back to you within 24 hours—usually much sooner.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 rounded-lg transition-colors">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-1 transition-colors">Email</h3>
                    <a
                      href="mailto:flockr@flockrlabs.com"
                      className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      flockr@flockrlabs.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-slate-800 transition-colors">
                <p className="text-sm text-gray-500 dark:text-slate-400 transition-colors">
                  <strong>Legal Name:</strong> Flockr Labs LLC
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 p-8 transition-colors"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />
    </main>
  );
}
