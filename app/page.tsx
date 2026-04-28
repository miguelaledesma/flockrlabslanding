"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import {
  Bot,
  Boxes,
  ChevronDown,
  Database,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  const clients = useMemo(() => [
    { name: "A1 Designing", image: "/a1designing.png" },
    { name: "EZ Floorz and More", image: "/ezfloors.png" },
    { name: "HeyRuby", image: "/heyruby.png" },
    { name: "SITH Athletics", image: "/sith.png" },
  ], []);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-50 dark:selection:bg-blue-900/30 selection:text-blue-600 dark:selection:text-blue-400 transition-colors">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        {/* Designer Background: Ultra-subtle grid + light mask */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 leading-[1.05] transition-colors"
            >
              Custom software for <br className="hidden md:block" />
              businesses{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-serif italic bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent px-2">
                  outgrowing SaaS
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
                  className="absolute bottom-1 left-0 w-full h-[0.12em] bg-blue-100/80 dark:bg-blue-900/40 -z-0 origin-left rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-5 max-w-2xl leading-relaxed font-medium transition-colors"
            >
              We design, build, and maintain CRMs, ops platforms, and AI workflows fitted to how your business actually runs — for when HubSpot, QuickBooks, and the rest stop fitting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-800 dark:text-slate-200 mb-12 max-w-2xl leading-relaxed font-semibold transition-colors"
            >
              White-glove custom software, built to the standard you&apos;ve come to expect from the big names.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-5"
            >
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-sm font-semibold bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-full transition-all shadow-sm">
                  Book a 30-min strategy call
                </Button>
              </Link>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors">
                Engineering from Airbnb, HubSpot, and AI startups at every stage
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="py-20 border-y border-slate-50 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/20 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-10 transition-colors"
          >
            Trusted by operators across SaaS, landscaping and home-remodeling services, retail, and athletics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-12 items-center justify-items-center"
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="relative h-12 md:h-14 w-full max-w-[180px]"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, 180px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we replace - SaaS Strikethrough Wall */}
      <section className="py-16 md:py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 md:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 transition-colors">The Problem</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight transition-colors">
              The tools that stop fitting <br className="hidden md:block" />as you grow.
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
              Most growing businesses stack 6&ndash;10 SaaS tools to run their operation. Each one fits 70% of how you actually work &mdash; and the other 30% becomes workarounds, spreadsheets, and Zapier glue.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "HubSpot", "Salesforce", "Pipedrive", "QuickBooks",
              "FreshBooks", "Asana", "Monday", "Trello",
              "Google Calendar", "Calendly", "Zapier", "Mailchimp"
            ].map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="relative bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-4 py-5 md:px-5 md:py-6 overflow-hidden transition-colors"
              >
                <span className="block text-sm md:text-base font-semibold text-slate-400 dark:text-slate-500 transition-colors">
                  {tool}
                </span>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[120%] h-[2px] bg-red-500/60 dark:bg-red-500/70 transform -rotate-12 origin-center" />
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-12 md:mt-16 text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
            We replace your stack with <span className="font-bold text-slate-900 dark:text-slate-100">one custom system</span>, fitted to how your business actually runs.
          </p>
        </div>
      </section>

      {/* What we ship - 4 Capability Cards */}
      <section className="py-16 md:py-32 bg-slate-50/40 dark:bg-slate-900/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 md:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 transition-colors">What we ship</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight transition-colors">
              One system, <br className="hidden md:block" />fitted to your business.
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
              Fewer tools, deeper fit, owned by you. Here&apos;s what the customers we replace SaaS for typically end up shipping with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: Database,
                title: "Custom CRMs",
                replaces: ["HubSpot", "Pipedrive", "Salesforce"],
                example: "Lead intake from your channels — web forms, Instagram DMs, inbound calls — enriched and routed to the right person, tracked across pipeline stages fitted to your actual sales motion. Not a generic template.",
              },
              {
                icon: Boxes,
                title: "Operations Platforms",
                replaces: ["QuickBooks", "Asana", "Spreadsheets"],
                example: "Job intake → resource and crew assignment → invoicing → payment, in one screen, fitted to your industry's real workflow. Replaces the spreadsheet sprawl you've outgrown.",
              },
              {
                icon: Bot,
                title: "AI Workflows",
                replaces: ["Zapier", "Manual review", "Inbox triage"],
                example: "Inbound emails triaged by an LLM that knows your business. Documents read and summarized. Repetitive 20-minute decisions made in 10 seconds — with a human in the loop where it counts.",
              },
              {
                icon: Wrench,
                title: "Migrations & Integrations",
                replaces: ["Vendor lock-in", "CSV exports", "Data trapped in SaaS"],
                example: "Get your data out of the tools you've outgrown. Two-way sync with the ones you can't ditch yet. Phased migration so you're never stuck mid-switch with two sources of truth.",
              },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white dark:bg-slate-950 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-5 transition-colors">
                  <cap.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors">{cap.title}</h3>
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mr-1 transition-colors">Replaces</span>
                  {cap.replaces.map((r) => (
                    <span key={r} className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full px-2.5 py-1 transition-colors">{r}</span>
                  ))}
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors">
                  {cap.example}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work - 4 Step Process */}
      <section className="py-16 md:py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 md:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 transition-colors">How we work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight transition-colors">
              From friction <br className="hidden md:block" />to shipped.
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
              Most engagements run 6&ndash;14 weeks from kickoff to launch. You have working software the whole time, not at the end.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                duration: "1–2 weeks",
                desc: "We sit with your team, watch the actual work, and find the real friction. Not a brief — a diagnosis.",
              },
              {
                step: "02",
                title: "Scope",
                duration: "1 week",
                desc: "We propose what to build, what to replace, and how it pays back. Fixed scope, fixed timeline, signed quote.",
              },
              {
                step: "03",
                title: "Build",
                duration: "4–12 weeks",
                desc: "Weekly increments. You see it growing each week, give feedback, and have working software the whole time.",
              },
              {
                step: "04",
                title: "Run",
                duration: "Ongoing",
                desc: "We maintain it, evolve it, and operate it with you. New features ship as your business needs them.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative"
              >
                <div className="text-5xl md:text-6xl font-bold text-slate-200 dark:text-slate-800 leading-none mb-4 transition-colors">{step.step}</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 transition-colors">{step.title}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 transition-colors">{step.duration}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight transition-colors">Common Questions</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg transition-colors">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How much does a typical project cost?",
                a: "Engagements typically start at $25K for scoped builds and scale into the six figures for multi-quarter platforms. We also offer aligned-incentive partnerships where we take a smaller base plus a revenue or profit share — best for operators who want a real partner, not just a vendor. Book a free 30-min call and we'll scope your specific situation."
              },
              {
                q: "How do we get started?",
                a: "It starts with a simple conversation. We'll meet (virtually or in person) to discuss your business needs, look at your current setup, and determine if we're the right fit for your goals."
              },
              {
                q: "How long does a project usually take?",
                a: "Most websites and custom CRMs are delivered within 2 to 4 weeks. We prioritize speed and quality so you can start seeing the benefits of your new technology as soon as possible."
              },
              {
                q: "Do I need to be 'tech-savvy' to work with you?",
                a: "Not at all. We handle all the technical heavy lifting and explain everything in plain English. Our goal is to make technology a tool for your growth, not a source of stress."
              },
              {
                q: "What kind of support do you offer after launch?",
                a: "We don't just build and disappear. Every project includes a walkthrough of your new system and 30 days of priority support to ensure everything is running perfectly."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-900 hover:border-blue-100 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-[2rem]"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors pr-4">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-slate-400 dark:text-slate-500 transition-colors" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4">
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium transition-colors">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - The Signature Piece */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-10 tracking-tighter transition-colors">Ready to build?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium transition-colors">
              Tell us where the friction is. We&apos;ll set up a 30-minute call and scope it together.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="h-16 px-12 text-lg font-bold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] dark:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">
                  Book a strategy call
                </Button>
              </Link>
              <a href="mailto:flockr@flockrlabs.com" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-bold uppercase tracking-widest text-[10px]">
                flockr@flockrlabs.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
