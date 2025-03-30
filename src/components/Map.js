"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useEffect } from "react";
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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCj4nV0Kl9E36DN5VlYMEER9UwkkKMveag", 
  });

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsMapLoaded(true);
    }
  }, [isLoaded]);

  if (!isMapLoaded) return <p>Carregando mapa...</p>;

  return (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
