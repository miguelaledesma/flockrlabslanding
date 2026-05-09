"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Shirt, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopifyBuyButton } from "@/components/shopify-buy-button";

// Each product comes from a Shopify Buy Button snippet. The `nodeId` must
// match the `<div id='...'>` from the snippet exactly so the SDK can mount.
const products = [
  {
    productId: "7395195060309",
    nodeId: "product-component-1778366897255",
  },
  {
    productId: "7395200237653",
    nodeId: "product-component-1778367433639",
  },
];

export function ShopClient() {
  const benefits = [
    {
      icon: Cpu,
      title: "For AI-native builders",
      desc: "Designed for the people shipping with Cursor, Claude, and a stack of half-finished side projects. Subtle, not loud.",
    },
    {
      icon: Shirt,
      title: "Made for daily wear",
      desc: "Structured front, soft fit, low-profile embroidery. The kind of hat that lives between your laptop bag and your favorite coffee shop.",
    },
    {
      icon: Sparkles,
      title: "Powered by prompts, approved by humans",
      desc: "Designed by builders, worn by builders. No buzzwords on the brim — just a clean piece you'll actually want to wear.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-50 dark:selection:bg-blue-900/30 selection:text-blue-600 dark:selection:text-blue-400 transition-colors">
      {/* Hero */}
      <section className="relative pt-28 md:pt-44 pb-16 md:pb-24 px-4">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6 transition-colors"
            >
              AI Builder Merch
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.75rem] sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-500 dark:from-slate-100 dark:via-slate-200 dark:to-blue-400 bg-clip-text text-transparent pb-2"
            >
              Hats for Builders.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl font-semibold text-slate-800 dark:text-slate-100 leading-snug md:leading-relaxed max-w-2xl transition-colors"
            >
              Minimal embroidered hats for developers, AI people, and builders
              who live somewhere between the first prompt and the final deploy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product */}
      <section
        aria-labelledby="product-heading"
        className="py-16 md:py-24 border-t border-slate-100 dark:border-slate-800/60 transition-colors"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 transition-colors">
              The Drop
            </p>
            <h2
              id="product-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight transition-colors"
            >
              The Builder Hats.
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors max-w-xl mx-auto mt-4">
              A small drop. Built clean. Made for the desk, the deploy, and
              everywhere in between.
            </p>
          </div>

          <ul
            className="mx-auto grid w-full grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[420px] md:max-w-[880px] list-none p-0"
            aria-label="Products available to purchase"
          >
            {products.map((product, i) => (
              <motion.li
                key={product.nodeId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/40 p-4 sm:p-6 md:p-8 transition-colors"
              >
                <ShopifyBuyButton
                  productId={product.productId}
                  nodeId={product.nodeId}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-32 border-t border-slate-100 dark:border-slate-800/60 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 md:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 transition-colors">
              Why these hats
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight leading-tight transition-colors">
              Built for the people <br className="hidden md:block" />
              actually shipping.
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed transition-colors">
              Made for software engineers, indie hackers, prompt engineers, and
              startup builders. Quiet design, good materials, no logos
              screaming at strangers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-16 gap-y-12">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <b.icon
                  className="h-6 w-6 text-slate-900 dark:text-slate-100 mb-5 transition-colors"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors">
                  {b.title}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-md transition-colors">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 px-6 border-t border-slate-100 dark:border-slate-800/60 transition-colors">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-10 tracking-tighter bg-gradient-to-br from-slate-900 via-slate-800 to-blue-500 dark:from-slate-100 dark:via-slate-200 dark:to-blue-400 bg-clip-text text-transparent pb-2">
              Grab a hat.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto font-medium transition-colors">
              Small drop. Honest pricing. Ships clean. Wear one to the next demo
              day.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link href="#product-heading" aria-label="Jump to products to add a hat to your cart">
                <Button
                  size="lg"
                  className="h-14 md:h-16 px-10 md:px-12 text-base md:text-lg font-bold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  Shop the hats
                </Button>
              </Link>
              <a
                href="mailto:flockr@flockrlabs.com"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-bold uppercase tracking-widest text-[10px]"
                aria-label="Email Flockr Labs about merch"
              >
                Bulk or team orders → flockr@flockrlabs.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
