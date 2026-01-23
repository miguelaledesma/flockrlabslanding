"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Users2,
  Building2,
  Globe,
  ShoppingBag,
  Wrench,
  UtensilsCrossed,
  Camera,
  Search,
  MessageSquare,
  Cpu,
  Bot,
  Database,
  Boxes,
  CheckCircle2,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reviews = [
    {
      name: "A1 Designing",
      role: "Custom CRM & Operations",
      content: "The custom CRM Flockr built for us changed everything. We can finally track every lead from the first call to the final design, and see our entire operation in one dashboard.",
      image: "/a1designing.png"
    },
    {
      name: "EZ Floorz and More",
      role: "Lead Management System",
      content: "Managing flooring leads used to be a nightmare of spreadsheets. Now we can see exactly where every job stands and our field operations have never been smoother.",
      image: "/ezfloors.png"
    },
    {
      name: "HeyRuby",
      role: "Trucking Operations System",
      content: "They built a system that handles our fleet's documentation and lead tracking perfectly. It gives us a bird's-eye view of our entire operation in real-time.",
      image: "/heyruby.png"
    },
    {
      name: "SITH Athletics",
      role: "Fashion Brand Operations",
      content: "As a fast-growing fashion brand, managing our drops and customer leads was getting complex. Flockr built custom operational tools that help us manage everything from production leads to warehouse fulfillment perfectly.",
      image: "/sith.png"
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-50 dark:selection:bg-blue-900/30 selection:text-blue-600 dark:selection:text-blue-400 transition-colors">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        {/* Designer Background: Ultra-subtle grid + light mask */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 leading-[0.95] transition-colors"
            >
              Technology for <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 font-serif italic bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent px-2">
                  YOUR
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
                  className="absolute bottom-2 left-0 w-full h-[0.15em] bg-blue-100/80 dark:bg-blue-900/40 -z-0 origin-left rounded-full"
                />
              </span>{" "}
              business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium transition-colors"
            >
              We build high-performance CRMs, custom operations software, and modern web experiences for businesses that value quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-sm font-semibold bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-full transition-all shadow-sm">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-all">
                  Our Process
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Clean Marquee */}
      <section className="py-20 border-y border-slate-50 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/20 overflow-hidden transition-colors">
        <div className="flex flex-col gap-12">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="inline-block w-[400px] bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.3)] transition-colors"
              >
                <p className="text-slate-600 dark:text-slate-300 text-base whitespace-normal mb-6 font-medium leading-relaxed italic transition-colors">
                  &quot;{review.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 relative transition-colors">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-1 w-8 bg-blue-600 dark:bg-blue-400 rounded-full transition-colors" />
                  )}
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm transition-colors">{review.name}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider transition-colors">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Refined & Minimal */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {/* Featured Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-2 lg:row-span-2 bg-slate-900 dark:bg-slate-800 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden transition-colors min-h-[280px] md:min-h-0"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 dark:bg-blue-500/20 blur-[100px]" />
              <div className="relative z-10">
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8 mb-4 sm:mb-6 md:mb-8 text-blue-400 dark:text-blue-300 transition-colors" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Custom <br />Solutions</h3>
                <p className="text-slate-400 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs transition-colors">We don&apos;t do generic. We build tools specifically for your workflow.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                {["CRMs", "Operations", "AI", "Mobile"].map(tag => (
                  <span key={tag} className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 dark:bg-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* AI Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 md:p-10 flex flex-col justify-between group hover:border-blue-100 dark:hover:border-blue-800 transition-colors min-h-[180px] md:min-h-0"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center transition-colors">
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400 transition-colors" />
                </div>
                <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-[9px] sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest transition-colors">Active</div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors">AI Workflows</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium transition-colors">Modernize your business with automated AI agents and smart document processing.</p>
              </div>
            </motion.div>

            {/* Industries Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-1 bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-colors min-h-[180px] md:min-h-0"
            >
              <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 dark:text-slate-500 transition-colors mb-2" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-tight transition-colors">Industries <br />We Support</h3>
              <p className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-tighter transition-colors mt-2">Landscaping to Construction</p>
            </motion.div>

            {/* Trust Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-1 bg-white dark:bg-slate-900 rounded-2xl md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:border-blue-100 dark:hover:border-blue-800 transition-colors min-h-[180px] md:min-h-0"
            >
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400 transition-colors mb-2" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors">Zero Jargon.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium transition-colors mt-2">Clear communication, no hidden fees.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Toolkit - Ultra Clean Grid */}
      <section className="py-16 md:py-32 bg-slate-50/30 dark:bg-slate-900/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight transition-colors">The Toolkit</h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium transition-colors">Specialized software designed for the growth of local businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-16">
            {[
              { icon: Globe, title: "Modern Websites", desc: "Fast, mobile-ready sites built for conversion." },
              { icon: Database, title: "Custom CRMs", desc: "Tailored lead and operation management systems." },
              { icon: ShoppingBag, title: "E-commerce", desc: "Full-service Shopify setup and custom themes." },
              { icon: Search, title: "Local SEO", desc: "Ranking your business where it matters most." },
              { icon: MessageSquare, title: "Social Tools", desc: "Custom bio links and engagement tools." },
              { icon: Cpu, title: "Tech Strategy", desc: "Expert advice on scaling your business tech." },
              { icon: Wrench, title: "System Updates", desc: "Modernizing legacy tools for better performance." },
              { icon: Boxes, title: "Custom Software", desc: "Bespoke tools built for unique business cases." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col group"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 mb-4 sm:mb-6 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-colors">
                  <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3 transition-colors">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors">{service.desc}</p>
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
                a: "Our projects are billed at a standard rate of $300/hr. Small business projects typically range between $2,000 and $10,000, while mid-size business solutions usually range from $10,000 to $75,000. For enterprise-level projects, please contact us for a custom consultation and quote."
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
                      <div className="px-8 pb-8 pt-0">
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
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium transition-colors">
              Join the local businesses modernizing their operations with Flockr Labs.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="h-16 px-12 text-lg font-bold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] dark:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">
                  Let&apos;s talk
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
