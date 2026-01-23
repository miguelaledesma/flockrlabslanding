"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to handle system preference, default to light if not mounted
  const isDarkMode = mounted && resolvedTheme === "dark";

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image 
              src={isDarkMode ? "/darkmodeFlockr.png" : "/flockr.png"} 
              alt="Flockr Labs" 
              width={160} 
              height={60}
              className="h-12 w-auto mb-4 object-contain"
              style={{ 
                height: '3rem',
                width: 'auto',
                maxWidth: '160px'
              }}
            />
            <p className="text-gray-600 dark:text-slate-300 transition-colors">
              Flockr Labs LLC - Making technology simple and affordable for small businesses and entrepreneurs. Big tech experience, small business focus.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-slate-100 mb-4 transition-colors">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-slate-100 mb-4 transition-colors">Legal</h4>
            <p className="text-gray-600 dark:text-slate-300 text-sm transition-colors">Flockr Labs LLC</p>
            <p className="text-gray-600 dark:text-slate-300 text-sm mt-2 transition-colors">
              <a href="mailto:flockr@flockrlabs.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                flockr@flockrlabs.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-gray-600 dark:text-slate-400 transition-colors">
          <p>&copy; {new Date().getFullYear()} Flockr Labs LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
