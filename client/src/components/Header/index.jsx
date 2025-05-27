import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { HiMenu, HiChevronUp } from 'react-icons/hi';

export default function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [hiddenHeader, setHiddenHeader] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const revertMenuState = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleOutsideClicks(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setHiddenHeader(true);
      }
      console.log('a');
      
    }
    document.addEventListener('mousedown', handleOutsideClicks);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClicks);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${hiddenHeader && styles.hidden}`}>
        <Link to='/' className={styles.left}>
          <img
            src='/svg/logo.svg'
            alt='Logo da Revolução Francesa'
            className={styles.logo}
          />
          <h1 className={styles.title}>Veregeur</h1>
        </Link>

        <div className={styles.menuIcon} onClick={revertMenuState}>
          <HiMenu size={40} />
          <nav
            className={`${styles.menuSide} ${MenuOpen ? styles.open : ''}`}
            ref={menuRef}>
            <ul>
              <li>
                <Link to='/' onClick={() => setMenuOpen(false)}>
                  Início
                </Link>
              </li>
              <li>
                <Link to='/timeline' onClick={() => setMenuOpen(false)}>
                  Linha do Tempo
                </Link>
              </li>
              <li>
                <Link to='/quizzes' onClick={() => setMenuOpen(false)}>
                  Quiz
                </Link>
              </li>
              <li>
                <Link to='/biographies' onClick={() => setMenuOpen(false)}>
                  Biografias
                </Link>
              </li>
              <li>
                <Link to='/map' onClick={() => setMenuOpen(false)}>
                  Mapa
                </Link>
              </li>
              <li>
                <Link to='/galery' onClick={() => setMenuOpen(false)}>
                  Galeria
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          onClick={() => setHiddenHeader((prev) => !prev)}
          className={styles.arrow}>
          <HiChevronUp style={{ rotate: hiddenHeader && '180deg' }} size={40} />
        </div>
      </header>
    </>
  );
}
