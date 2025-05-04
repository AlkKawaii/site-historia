import styles from './SearchResults.module.css';
import ProductCard from '../../components/ProductCard';
import useProductsContext from '../../hooks/useProductsContext';
import Filters from '../../components/Filters';

export default function SearchResults() {
    const { results } = useProductsContext();

    const priceFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <main className={styles.container}>
            <Filters />
            <div className={styles.productsContainer}>
                <h2>
                    {results.length
                        ? `${results.length} resultados`
                        : 'Nenhum resultado encontrado'}{' '}
                </h2>
                <section>
                    {results.map((product) => (
                        <ProductCard
                            key={product.gameId}
                            productID={product.gameId}
                            productTitle={product.name}
                            productPrice={priceFormatter.format(
                                product.rentalPrice
                            )}
                            productThumbnail={product.thumbnail}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}
