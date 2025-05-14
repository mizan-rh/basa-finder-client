// components/BasaFinderMap.tsx

"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "12px",
};

const center = {
  lat: 23.865372, // Example latitude (Dhaka)
  lng: 90.41124, // Example longitude (Dhaka)
};

const BasaFinderMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError) return <p className="text-red-500">Failed to load map</p>;
  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default BasaFinderMap;
