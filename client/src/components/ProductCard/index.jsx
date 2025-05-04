import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({
    productID,
    productTitle,
    productPrice,
    productThumbnail,
}) {
    const audio = new Audio('audios/click.wav');
    return (
        <Link to={`/GameDetails/${productID}`}>
            <article className={styles.card} onClick={() => audio.play()}>
                <img src={productThumbnail} alt={productTitle} />
                <h2>{productTitle}</h2>
                <p>{productPrice}</p>
            </article>
        </Link>
    );
}
