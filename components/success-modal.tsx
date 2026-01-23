"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const createConfetti = () => {
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];
    // Reduce confetti count on mobile for better performance
    const isMobile = window.innerWidth < 640;
    const confettiCount = isMobile ? 30 : 50;

    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;

        confetti.style.cssText = `
          position: fixed;
          top: -10px;
          left: ${startX}px;
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
          border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
          pointer-events: none;
          z-index: 9999;
          animation: confetti-fall ${duration}s ease-out ${delay}s forwards;
        `;

        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, (duration + delay) * 1000);
      }, i * 20);
    }
  };

  // Trigger confetti effect
  useEffect(() => {
    if (isOpen) {
      createConfetti();
    }
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative pointer-events-auto border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                {/* Animated Checkmark */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                    className="relative"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3,
                      }}
                      className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl -z-10"
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.4,
                      }}
                      className="relative"
                    >
                      <CheckCircle2 className="h-16 w-16 sm:h-20 sm:w-20 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3 transition-colors">
                    Message Sent!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-colors px-2">
                    Thanks for reaching out! We&apos;ve received your message and will be in touch soon. We typically respond within a few hours during business days.
                  </p>
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6 sm:mt-8"
                >
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 sm:py-3 px-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20"
                  >
                    Got it!
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
