"use client";

import { motion } from "framer-motion";
import { Code2, Users, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen pt-32 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Flockr Labs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re a team of experienced technologists who believe every
              business deserves access to great technology.
              From custom CRMs to complete business solutions, we help local
              businesses, startups, and growing companies build tools that
              actually work for them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our mission is simple: make technology accessible and affordable
                for small businesses and entrepreneurs. Whether you&apos;re
                opening your first location, updating your outdated website, or
                launching your startup idea—we&apos;re here to help.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe great technology shouldn&apos;t be reserved for
                Fortune 500 companies. Every business deserves a professional
                online presence, efficient systems, and the tools to compete in
                today&apos;s digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the go-to tech partner for small businesses and
                entrepreneurs—helping thousands of businesses establish their
                online presence, streamline operations, and grow with
                confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Big Tech Experience",
                description:
                  "Our team and advisors have built products at Google, Meta, Amazon, and other top companies. Now we bring that expertise to your business.",
              },
              {
                icon: Users,
                title: "Small Business Heart",
                description:
                  "We understand the challenges of running a small business. We're here to help, not to upsell you on things you don't need.",
              },
              {
                icon: TrendingUp,
                title: "Affordable & Transparent",
                description:
                  "Clear pricing, no hidden fees, and solutions that fit your budget. We grow when you grow—it's that simple.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <value.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl p-12 md:p-16 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Work Together?
            </h2>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
              We&apos;d love to hear about what you&apos;re building. Drop us a line and we&apos;ll set up a time to chat about your project.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
