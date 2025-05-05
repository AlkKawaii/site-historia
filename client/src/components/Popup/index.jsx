import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Popup.module.css";

function Popup({ children }) {

  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  function close() {
    setIsVisible(false);
    navigate("/quizzes"); 
  }

  if (!isVisible) return null;

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <button className={styles.close} onClick={close}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
