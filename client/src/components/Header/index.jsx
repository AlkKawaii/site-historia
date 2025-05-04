import { useEffect, useRef } from 'react';
import styles from './Header.module.css';
import SearchBox from '../SearchBox';
import { Link, useLocation } from 'react-router-dom';
import { GiClapperboard } from 'react-icons/gi';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
export default function Header() {
    const oldScrollRef = useRef(window.scrollY);
    const headerRef = useRef(null);
    let location = useLocation();
    useEffect(() => {
        if (headerRef.current && location.pathname !== '/') {
            headerRef.current.classList.add(styles.show);
        }

        const handleScroll = () => {
            let currentScroll = window.scrollY;
            if (
                location.pathname === '/' &&
                currentScroll < window.innerHeight
            ) {
                if (headerRef.current.classList.contains(styles.show)) {
                    headerRef.current.classList.remove(styles.show);
                }
            } else {
                if (currentScroll > oldScrollRef.current) {
                    headerRef.current.classList.remove(styles.show);
                } else {
                    headerRef.current.classList.add(styles.show);
                }
            }
            oldScrollRef.current = window.scrollY;
        };
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <header className={styles.header} ref={headerRef}>
            <Link to='/'>
                <div>
                    <GiClapperboard />
                    Clapboard
                </div>
            </Link>
            
            <SearchBox />
            <div>
                <IoCartOutline />
                <MdOutlineAccountCircle />
            </div>
        </header>
    );
}
