import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button';
import styles from './Filters.module.css';

export default function Filters() {
    const { query } = useParams();
    const navigate = useNavigate();
    const params = new URLSearchParams();
    const categories = [
        'Familiar',
        'Party Game',
        'Estratégia',
        'Aventura',
        'Construção e Economia',
        'Cartas',
        'Sci-Fi e Fantasia',
        'Guerra e Conflito',
        'Temático',
        'Cooperativo',
    ];
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        for (const [key, value] of Object.entries(data)) {
            if (value) {
                params.append(key, value);
            }
        }
        const URL = query
            ? `/search/${query}?${params.toString()}`
            : `/search?${params.toString()}`;
        navigate(URL);
    }
    const rangeInputs = [
        { label: 'Preço:', minName: 'minPrice', maxName: 'maxPrice' },
        { label: 'Jogadores:', minName: 'minPlayers', maxName: 'maxPlayers' },
        { label: 'Tempo de jogo:', minName: 'minTime', maxName: 'maxTime' },
        { label: 'Avaliação:', minName: 'minRating', maxName: 'maxRating' },
        { label: 'Ano:', minName: 'minYear', maxName: 'maxYear' },
    ];

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.categoryName}>Categorias</h3>
            <div className={styles.categoriesContainer}>
                {categories.map((category) => (
                    <div key={category} className={styles.radioInput}>
                        <input
                            type='radio'
                            name='category'
                            id={category}
                            value={category}
                        />
                        <label className={styles.label} htmlFor={category}>
                            {category}
                        </label>
                    </div>
                ))}
            </div>
            <span className={styles.break}></span>
            <div className={styles.checkInput}>
                <input type='checkbox' id='isExpansion' name='isExpansion' />
                <label className={styles.label} htmlFor='isExpansion'>
                    Expansão
                </label>
            </div>
            <span className={styles.break}></span>
            {rangeInputs.map(({ label, minName, maxName }) => (
                <div key={minName} className={styles.rangeInput}>
                    <label className={styles.label} htmlFor={minName}>
                        {label}
                    </label>
                    <div>
                        <input type='number' name={minName} id={minName} /> -{' '}
                        <input type='number' name={maxName} id={maxName} />
                    </div>
                </div>
            ))}
            <Button width='100%' height='3em' type='submit'>
                Filtrar
            </Button>
        </form>
    );
}
