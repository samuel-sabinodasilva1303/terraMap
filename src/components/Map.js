"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "./Map.module.css";

const containerStyle = {
  width: "100%",
  height: "85vh",
};

const center = {
  lat: -15.7801,
  lng: -47.9292,
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCj4nV0Kl9E36DN5VlYMEER9UwkkKMveag",
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
