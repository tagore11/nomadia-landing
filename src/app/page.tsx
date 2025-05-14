"use client";

import Map from "@/components/Map";

export default function NomadiaLandingPage() {
  return (
    <main className="bg-white text-blue-950 font-sans">
      {/* Hero */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <h1 className="text-6xl font-extrabold mb-4">Nomadia</h1>
        <p className="text-2xl mb-8 max-w-2xl mx-auto">
          Peer-to-peer crypto-to-cash. Local currency, global freedom.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://t.me/NomadiaApp" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Launch on Telegram
            </button>
          </a>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
            Become an Agent
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center bg-blue-50">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        <p className="mb-12 text-lg max-w-2xl mx-auto">
          Find verified local agents. Swap crypto for cash securely and instantly — or become an agent and earn.
        </p>
        <div className="flex justify-center flex-wrap gap-8">
          <div className="w-72 bg-white p-6 rounded-xl shadow-md text-left">
            <h3 className="font-bold text-xl mb-2">1. Find an Agent</h3>
            <p>Search agents near your location and view ratings and fees.</p>
          </div>
          <div className="w-72 bg-white p-6 rounded-xl shadow-md text-left">
            <h3 className="font-bold text-xl mb-2">2. Swap Instantly</h3>
            <p>Send crypto, meet the agent, and receive local cash in minutes.</p>
          </div>
          <div className="w-72 bg-white p-6 rounded-xl shadow-md text-left">
            <h3 className="font-bold text-xl mb-2">3. Become an Agent</h3>
            <p>List yourself as an exchanger, help travelers, and earn with every swap.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Explore Nearby Exchangers</h2>
        <p className="mb-10 text-lg max-w-2xl mx-auto">
          Our map helps you find the best peer-to-peer exchangers near you.
        </p>
        <Map />
      </section>

      {/* Join the Movement */}
      <section className="py-20 px-6 text-center bg-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-6">Join the Nomadia Network</h2>
        <p className="mb-10 text-lg max-w-2xl mx-auto">
          Whether you&apos;re a traveler or a local crypto holder, Nomadia empowers global exchange.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Join our Telegram
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-gray-50">
        <p>© {new Date().getFullYear()} Nomadia. All rights reserved.</p>
      </footer>
    </main>
  );
}