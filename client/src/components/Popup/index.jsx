import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Popup.module.css';
import { IoCloseOutline } from 'react-icons/io5';

function Popup({ children, onClose, isOpen }) {
  const [isVisible, setIsVisible] = useState(isOpen || true);

  function close() {
    setIsVisible(false);
    onClose?.();
  }

  if (!isVisible) return null;

  return createPortal(
    <div className={styles.popupContainer} onClick={close}>
      <button className={styles.close}>
        <IoCloseOutline />
      </button>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Popup;
