import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { HiMenu } from 'react-icons/hi';

export default function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const revertMenuState = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleOutsideClicks(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClicks);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClicks);
        };
    }, []);

    return (
        <>
            <header className={styles.header}>
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
                </div>
            </header>

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
                        <Link
                            to='/timeline'
                            target='_blank'
                            onClick={() => setMenuOpen(false)}>
                            Linha do Tempo
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/quizzes'
                            target='_blank'
                            onClick={() => setMenuOpen(false)}>
                            Quiz
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
