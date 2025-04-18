// PuneMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fixing default marker icon issue in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = () => {
  const puneCoordinates = [18.5204, 73.8567]; // Pune, India

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <MapContainer
        center={puneCoordinates}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={puneCoordinates}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            <span
              style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}
            >
              👩‍💻 Based in Pune | Remote Ready
            </span>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
