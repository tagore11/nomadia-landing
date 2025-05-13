"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 36.2012, // Kaş
  lng: 29.6371,
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDYyuvzqrXx07kSKDZj5x1UtUx3-6fXlbs",
  });

  const mapCenter = useMemo(() => center, []);

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={13}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};

export default MapComponent;