import style from "./MapMarker.module.css";
import { Marker, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [20, 40],
  iconAnchor: [10, 40],
  popupAnchor: [0, -40],
  shadowSize: [41, 41],
});

export default function MapMarker({ id, position, title, image }) {
  return (
    <Marker
      id={id}
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: () => window.open(`/timeline#${id}`, "_blank"),
      }}
    >
      <Tooltip direction="top" offset={[0, -15]} opacity={1} permanent={false}>
        <div className={style.tooltip}>
          <h3 className={style.title}>{title}</h3>
          <img src={image} alt={title} className={style.image} />
        </div>
      </Tooltip>
    </Marker>
  );
}
