'use client';

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 36.2012,
  lng: 29.6371,
};

export default function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYyuvzqrXx07kSKDZj5x1UtUx3-6fXlbs", // ← kendi key'in burada
    libraries: ["places"],
  });

  const mapCenter = useMemo(() => center, []);

  if (loadError) return <div>Map yüklenirken hata oluştu.</div>;
  if (!isLoaded) return <div>Harita yükleniyor...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={13}
      onLoad={() => console.log("Harita yüklendi")}
      onUnmount={() => console.log("Harita kapatıldı")}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
}