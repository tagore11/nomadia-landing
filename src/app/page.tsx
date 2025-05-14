'use client';

import Map from "@/components/Map";

export default function NomadiaLandingPage() {
  return (
    <main className="bg-white text-blue-950">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">Nomadia</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Local Currency, Global Freedom. Seamless crypto-to-cash exchanges
          for digital nomads, remote workers, and crypto travelers.
        </p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
          Launch App (Telegram)
        </button>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">How Nomadia Works</h2>
        <p className="mb-10 text-lg max-w-2xl mx-auto">
          Find peer-to-peer exchanger agents in your current location. Send
          stablecoins, receive local currency. Or become an agent and earn by
          helping others.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="w-64 bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl mb-2">Find Exchangers</h3>
            <p>See nearby agents and read real user reviews.</p>
          </div>
          <div className="w-64 bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl mb-2">Exchange Easily</h3>
            <p>Send crypto, receive cash in minutes. Fast, secure, local.</p>
          </div>
          <div className="w-64 bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-xl mb-2">Earn as Agent</h3>
            <p>
              Get listed as an exchanger and earn by facilitating swaps.
            </p>
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Explore the Global Map</h2>
        <p className="mb-10 text-lg max-w-2xl mx-auto">
          Discover verified crypto exchangers around you. Filter by location,
          rating, and preferences.
        </p>
        <Map />
      </section>
    </main>
  );
}