import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Flockr Labs",
  description: "Privacy Notice for Flockr Labs LLC.",
};

export default function PrivacyPolicyPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "app", "privacy-policy.html"),
    "utf-8"
  );

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-28 md:pt-36 pb-20 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
