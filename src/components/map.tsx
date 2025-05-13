"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 36.2012, // Örnek konum: Kaş
  lng: 29.6371,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDYyuvzqrXx07kSKDZj5x1UtUx3-6fXlbs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {/* Örnek Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;