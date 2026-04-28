"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Users, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen pt-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-slate-100 mb-6 transition-colors">
              About Flockr Labs
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed transition-colors">
              We&apos;re a small team of senior engineers who build the custom
              systems growing businesses need when off-the-shelf tools stop
              fitting. CRMs, ops platforms, AI workflows — designed and
              shipped end-to-end for the way your business actually runs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-6 transition-colors">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors">
                Most software is built for an average customer. Growing
                businesses aren&apos;t average — they have specific workflows,
                specific bottlenecks, and a specific way they win. We build for
                that, not for the median spreadsheet.
              </p>
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed transition-colors">
                The systems we ship replace the SaaS sprawl most growing
                businesses accumulate by year three — HubSpot, QuickBooks,
                Google Calendar, half a dozen spreadsheets, a Zapier patchwork.
                One system, fitted to how your business runs, owned by you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors"
            >
              <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 transition-colors" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 transition-colors">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors">
                To be the engineering team your business plugs in when SaaS no
                longer fits — partners who ship custom systems fast, run them
                with you, and share in the upside when it makes sense for both
                of us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4 transition-colors">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Real Engineering Experience",
                description:
                  "We've shipped at Airbnb, HubSpot, and AI startups at every stage — from seed to scale. That experience now goes into the systems we build for you, not a generic SaaS product.",
              },
              {
                icon: Users,
                title: "Built For How You Operate",
                description:
                  "Off-the-shelf tools force your business to bend to the product. We bend the product to your business. Every system we ship fits the way your team actually works.",
              },
              {
                icon: TrendingUp,
                title: "Skin In The Game",
                description:
                  "For the right partners, we take a smaller base fee plus a revenue or profit share. We win when you win — it stops being a vendor relationship and starts being a real one.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700 transition-colors"
              >
                <value.icon className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-xl p-12 md:p-16 text-white transition-colors"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to work together?
            </h2>
            <p className="text-xl text-slate-200 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto transition-colors">
              Tell us what you&apos;re building and where the friction is.
              We&apos;ll set up a 30-minute call to scope it together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-500 dark:hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Book a strategy call
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
