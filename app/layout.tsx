import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookieAudit — Automated GDPR Cookie Compliance Scanner",
  description: "Scan websites for cookie compliance issues and generate actionable GDPR audit reports. Built for EU web agencies and small businesses.",
  keywords: "GDPR, cookie compliance, audit, scanner, EU, web agencies"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2ae1a8f8-d31a-43c9-8887-fc05fce0f438"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
