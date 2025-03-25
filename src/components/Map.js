"use client"; // Garante que o componente roda no cliente

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
//import styles from "./Map.module.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -15.7801,
  lng: -47.9292,
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <p>Carregando mapa...</p>;

  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
