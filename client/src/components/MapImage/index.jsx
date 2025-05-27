import style from "./MapImage.module.css";
import MapMarker from "../MapMarker";
import { MapContainer, ImageOverlay, useMap, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "../../json/mapData.json";
import { useEffect } from "react";

const bounds = [
  [0, 0],
  [4096, 5760],
];

function ResetView() {
  const map = useMap();
  map.fitBounds(bounds);
  return null;
}

function FocusMarker({ data }) {
  const map = useMap();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const marker = data.find((item) => item.id.toString() === hash);
    if (marker) {
      map.setView(marker.position, 2);
    }
  }, [map, data]);

  return null;
}

export default function ImageMap() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={bounds}
      maxBounds={bounds}
      maxBoundsViscosity={1}
      maxZoom={1}
      minZoom={-2}
      zoomControl={false}
      style={{ height: "100vh", width: "100%", margin: "0 auto" }}
    >
      <ImageOverlay url="/img/map-image.png" bounds={bounds} />

      {mapData.map((item) => (
        <MapMarker
          key={item.id}
          id={item.id}
          position={item.position}
          title={item.title}
          image={item.image}
        />
      ))}
      <FocusMarker data={mapData} />
      <ZoomControl position="bottomleft" />
      <ResetView />
    </MapContainer>
  );
}
