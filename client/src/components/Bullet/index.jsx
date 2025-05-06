import { NavLink } from 'react-router-dom';
import styles from './Bullet.module.css';
import { useEffect, useState } from 'react';

export default function Bullet({ hash, currentHash, name }) {
    const [color, setColor] = useState('');
    useEffect(() => {
        const randomColor = `hsl(${Math.floor(
            Math.random() * 360
        )}, 70%, 70%)`;
        setColor(randomColor);
    }, []);
    
    return (
        <NavLink
            to={`/timeline#${hash}`}
            className={`
                ${currentHash === hash ? styles.active : ''} 
                ${styles.bullet}`}
            style={{
                backgroundColor: color,
            }}>
            <span className={styles.name}>{name}</span>
        </NavLink>
    );
}
