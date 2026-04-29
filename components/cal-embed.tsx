"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME || "flockrlabs";
const CAL_EVENT_SLUG = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG || "strategy-call";
const CAL_LINK = `${CAL_USERNAME}/${CAL_EVENT_SLUG}`;
const NAMESPACE = "strategy-call";

interface CalEmbedProps {
  className?: string;
  height?: number;
}

export function CalEmbed({ className = "", height = 700 }: CalEmbedProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: resolvedTheme === "dark" ? "dark" : "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    return (
      <div
        style={{ height }}
        className={`w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 animate-pulse ${className}`}
      />
    );
  }

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", height, overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
