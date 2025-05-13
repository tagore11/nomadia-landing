// src/app/page.tsx
'use client';
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
import React from "react";

const Button = ({
  className = "",
  children,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" }) => {
  const base = "rounded-2xl px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 transition";
  const outline = "bg-transparent border border-white text-white";
  return (
    <button className={`${variant === "outline" ? outline : base} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function NomadiaLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Local Currency, Global Freedom</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Exchange crypto for cash anywhere in the world through trusted local partners.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="text-lg px-6 py-3">Open in Telegram</Button>
          <Button variant="outline" className="text-lg px-6 py-3 border-white">See How It Works</Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "Connect your wallet or Telegram",
            "Find a local exchanger",
            "Chat securely & confirm the rate",
            "Meet and complete the transaction"
          ].map((step, i) => (
            <div key={i} className="p-6 bg-blue-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Step {i + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Preview */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Explore the Global Map</h2>
        <p className="mb-10 text-lg max-w-2xl mx-auto">
          Discover verified crypto exchangers around you. Filter by location, rating, and preferences.
        </p>
          <Map />
      </section>

      {/* Why Nomadia */}
      <section className="bg-blue-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Nomadia?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Global & borderless",
            "Privacy-focused",
            "No KYC required",
            "Community-rated exchangers",
            "Telegram-native UX",
            "Multi-currency support"
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-blue-900 rounded-2xl shadow-md">
              <p className="text-lg font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Become an Agent */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Become a Nomad Agent</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Help grow the decentralized economy. Apply to be a verified exchange point in your region.
        </p>
        <Button className="text-lg px-8 py-4">Apply Now</Button>
      </section>

      {/* Community Links */}
      <section className="bg-blue-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join the Community</h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <a href="#" className="underline">Telegram</a>
          <a href="#" className="underline">Discord</a>
          <a href="#" className="underline">Twitter</a>
          <a href="#" className="underline">Blog</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center bg-blue-950 text-sm text-gray-300">
        <p>© 2025 Nomadia. All rights reserved.</p>
      </footer>
    </div>
  );
}