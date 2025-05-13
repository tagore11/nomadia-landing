'use client';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Harita testi (tam ekran değil)</h1>
      <div style={{ width: "100%", height: "400px", border: "1px solid red" }}>
        <Map />
      </div>
    </main>
  );
}