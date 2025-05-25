import {
  GoogleMap,
  Marker,
  useLoadScript,
  DrawingManager,
} from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { getPathLength } from "geolib";

import Navbar from "./Navbar";
import styles from "./Map.module.css";

const containerStyle = {
  width: "100%",
  height: "85vh",
};

const center = {
  lat: -22.1102,
  lng: -50.6818,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCj4nV0Kl9E36DN5VlYMEER9UwkkKMveag",
    libraries: ["drawing"],
  });

  const [drawnData, setDrawnData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    fuelPrice: "",
    kmPerLiter: "",
  });
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");
  const drawnPath = useRef([]);
  const mapRef = useRef();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const q = query(
        collection(db, "calculations"),
        orderBy("date", "desc"),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHistory(data);
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
    }
  };

  const handleOverlayComplete = (e) => {
    if (e.type === "polygon") {
      const path = e.overlay
        .getPath()
        .getArray()
        .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));
      setDrawnData({ type: "polygon", path });
      drawnPath.current = path;
      setIsSidebarOpen(true);
    }
  };

  const handleCalculate = async () => {
    if (!drawnPath.current.length) {
      setMessage("Desenhe uma área no mapa primeiro!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    if (
      !formData.brand.trim() ||
      !formData.model.trim() ||
      !formData.fuelPrice ||
      !formData.kmPerLiter
    ) {
      setMessage("Preencha todos os campos obrigatórios!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const distance = getPathLength(drawnPath.current) / 1000;
    const litersNeeded = distance / parseFloat(formData.kmPerLiter);
    const cost = litersNeeded * parseFloat(formData.fuelPrice);

    const resultData = {
      brand: formData.brand,
      model: formData.model,
      fuelPrice: parseFloat(formData.fuelPrice),
      kmPerLiter: parseFloat(formData.kmPerLiter),
      distance,
      litersNeeded,
      cost,
      date: new Date().toISOString(),
    };

    setResult(resultData);

    try {
      await addDoc(collection(db, "calculations"), resultData);
      setHistory((prev) => [resultData, ...prev].slice(0, 5));
      setMessage("Salvo com sucesso!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Erro ao salvar no Firebase:", error);
      setMessage("Erro ao salvar dados.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleClear = () => {
    setFormData({ brand: "", model: "", fuelPrice: "", kmPerLiter: "" });
    setResult(null);
    drawnPath.current = [];
    setDrawnData(null);
    setMessage("");
  };

  const handleSearch = (place) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: place }, (results, status) => {
      if (status === "OK") {
        const location = results[0].geometry.location;
        mapRef.current.panTo(location);
        mapRef.current.setZoom(14);
      } else {
        console.error("Erro ao buscar local:", status);
        setMessage("Local não encontrado.");
        setTimeout(() => setMessage(""), 3000);
      }
    });
  };

  if (loadError) return <p>Erro ao carregar mapa</p>;
  if (!isLoaded) return <p>Carregando mapa...</p>;

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div
        className={`${styles.container} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        {message && <div className={styles.message}>{message}</div>}

        <div className={styles.mapWrapper}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={(map) => (mapRef.current = map)}
          >
            <Marker position={center} />
            <DrawingManager
              onOverlayComplete={handleOverlayComplete}
              options={{
                drawingControl: true,
                drawingControlOptions: {
                  position: window.google.maps.ControlPosition.TOP_CENTER,
                  drawingModes: ["polygon"],
                },
              }}
            />
          </GoogleMap>
        </div>

        {isSidebarOpen && (
          <div className={styles.sidebar}>
            <h3>Informações do Equipamento</h3>
            <input
              type="text"
              placeholder="Marca"
              value={formData.brand}
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Modelo"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Preço do Combustível (R$/L)"
              value={formData.fuelPrice}
              onChange={(e) =>
                setFormData({ ...formData, fuelPrice: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Km por Litro"
              value={formData.kmPerLiter}
              onChange={(e) =>
                setFormData({ ...formData, kmPerLiter: e.target.value })
              }
            />

            <div className={styles.buttonGroup}>
              <button onClick={handleCalculate}>Consultar</button>
              <button onClick={handleClear}>Nova Consulta</button>
            </div>

            {result && (
              <div className={styles.result}>
                <h4>Resultado</h4>
                <p>Distância: {result.distance.toFixed(2)} km</p>
                <p>Consumo: {result.litersNeeded.toFixed(2)} litros</p>
                <p>Custo: R$ {result.cost.toFixed(2)}</p>
              </div>
            )}

            <h4>Últimas 5 Consultas</h4>
            <ul className={styles.historyList}>
              {history.map((item, index) => (
                <li key={index} className={styles.historyItem}>
                  <strong>
                    {item.brand} {item.model}
                  </strong>
                  <br />
                  {new Date(item.date).toLocaleString()}
                  <br />
                  Distância: {item.distance.toFixed(2)} km
                  <br />
                  Custo: R$ {item.cost.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className={styles.toggleButton}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Fechar painel" : "Abrir painel"}
        >
          {isSidebarOpen ? ">>" : "<<"}
        </button>
      </div>
    </>
  );
}
