import { useRef } from 'react';
import styles from './SearchBox.module.css';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
    const queryRef = useRef('');
    const navigate = useNavigate();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (queryRef.current.trim()) {
                    navigate(`/search/${queryRef.current}`);
                }
            }}
            className={styles.searchBox}>
            <input
                type='search'
                name='search'
                id='search'
                autoComplete='off'
                className={styles.search}
                placeholder='Pesquise aqui'
                onChange={(e) => (queryRef.current = e.target.value)}
            />
            <button type='submit' className={styles.submit}>
                <IoMdSearch />
            </button>
        </form>
    );
}
