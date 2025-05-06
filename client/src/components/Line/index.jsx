import styles from './Line.module.css';

export default function Line({ children }) {
    return <aside className={styles.line}>{children}</aside>;
}
