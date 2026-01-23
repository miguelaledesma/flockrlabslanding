"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
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
    <main className="min-h-screen bg-white selection:bg-blue-50 selection:text-blue-600">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        {/* Designer Background: Ultra-subtle grid + light mask */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[0.95]"
            >
              Technology for <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 font-serif italic bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent px-2">
                  YOUR
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
                  className="absolute bottom-2 left-0 w-full h-[0.15em] bg-blue-100/80 -z-0 origin-left rounded-full"
                />
              </span>{" "}
              business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-medium"
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
                <Button size="lg" className="h-12 px-8 text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all shadow-sm">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full transition-all">
                  Our Process
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Clean Marquee */}
      <section className="py-20 border-y border-slate-50 bg-slate-50/20 overflow-hidden">
        <div className="flex flex-col gap-12">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="inline-block w-[400px] bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]"
              >
                <p className="text-slate-600 text-base whitespace-normal mb-6 font-medium leading-relaxed italic">
                  &quot;{review.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100 bg-slate-50 relative">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-1 w-8 bg-blue-600 rounded-full" />
                  )}
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Refined & Minimal */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[240px]">
            {/* Featured Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-2 lg:row-span-2 bg-slate-900 rounded-[2.5rem] p-12 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
              <div className="relative z-10">
                <Rocket className="h-8 w-8 mb-8 text-blue-400" />
                <h3 className="text-4xl font-bold mb-4 tracking-tight">Custom <br />Solutions</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xs">We don&apos;t do generic. We build tools specifically for your workflow.</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2">
                {["CRMs", "Operations", "AI", "Mobile"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* AI Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 p-10 flex flex-col justify-between group hover:border-blue-100 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Active</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">AI Workflows</h3>
                <p className="text-slate-500 text-sm font-medium">Modernize your business with automated AI agents and smart document processing.</p>
              </div>
            </motion.div>

            {/* Industries Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-1 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 p-10 flex flex-col justify-between"
            >
              <Building2 className="h-6 w-6 text-slate-400" />
              <h3 className="text-lg font-bold text-slate-900 leading-tight">Industries <br />We Support</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Landscaping to Construction</p>
            </motion.div>

            {/* Trust Box */}
            <motion.div
              whileHover={{ y: -2 }}
              className="md:col-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-10 flex flex-col justify-between hover:border-blue-100 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">Zero Jargon.</h3>
              <p className="text-slate-500 text-sm font-medium">Clear communication, no hidden fees.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Toolkit - Ultra Clean Grid */}
      <section className="py-32 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">The Toolkit</h2>
            <p className="text-lg text-slate-500 font-medium">Specialized software designed for the growth of local businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
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
                <div className="h-10 w-10 mb-6 flex items-center justify-center rounded-lg bg-white border border-slate-100 shadow-sm group-hover:border-blue-200 transition-colors">
                  <service.icon className="h-5 w-5 text-slate-900 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Common Questions</h2>
            <p className="text-slate-500 font-medium text-lg">Everything you need to know about working with us.</p>
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
                className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
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
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 tracking-tighter">Ready to build?</h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
              Join the local businesses modernizing their operations with Flockr Labs.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="h-16 px-12 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]">
                  Let&apos;s talk
                </Button>
              </Link>
              <a href="mailto:flockr@flockrlabs.com" className="text-slate-400 hover:text-slate-900 transition-colors font-bold uppercase tracking-widest text-[10px]">
                flockr@flockrlabs.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
