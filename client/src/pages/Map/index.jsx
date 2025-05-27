import styles from "./Map.module.css";
import MapImage from "../../components/MapImage";
import Button from "../../components/Button";

export default function Map() {
  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <h1>Mapa da França no Século 16</h1>
        <Button to="/">Voltar</Button>
      </div>
      <MapImage />
    </div>
  );
}
