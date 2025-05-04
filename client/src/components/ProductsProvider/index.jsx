import { useState, useEffect } from 'react';
import db from '../../json/db.json';
import ProductsContext from '../../contexts/ProductsContext';
import { useParams, useSearchParams } from 'react-router-dom';

export default function ProductsProvider({ children }) {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const normalizedQuery = normalizer(query);
        let filteredResults = db.filter((product) => {
            const normalizedTitle = normalizer(product.name);
            return normalizedTitle.includes(normalizedQuery);
        });

        const filters = Object.fromEntries(searchParams.entries());

        filters.isExpansion = filters.isExpansion || false;

        filters.minPlayers = +filters.minPlayers || 0;
        filters.minPrice = +filters.minPrice || 0;
        filters.minTime = +filters.minTime || 0;
        filters.minYear = +filters.minYear || 0;
        filters.minRating = +filters.minRating || 0;

        filters.maxPlayers = +filters.maxPlayers || Infinity;
        filters.maxPrice = +filters.maxPrice || Infinity;
        filters.maxTime = +filters.maxTime || Infinity;
        filters.maxYear = +filters.maxYear || Infinity;
        filters.maxRating = +filters.maxRating || Infinity;

        filteredResults = filteredResults.filter(
            (product) =>
                product.isExpansion === filters.isExpansion &&
                product.minPlayers >= filters.minPlayers &&
                product.maxPlayers <= filters.maxPlayers &&
                product.rentalPrice >= filters.minPrice &&
                product.rentalPrice <= filters.maxPrice &&
                product.playingTime >= filters.minTime &&
                product.playingTime <= filters.maxTime &&
                product.yearPublished >= filters.minYear &&
                product.yearPublished <= filters.maxYear &&
                product.averageRating >= filters.minRating &&
                product.averageRating <= filters.maxRating &&
                (!filters.category ||
                    product.categories.includes(filters.category))
        );

        setResults(filteredResults);
    }, [query, searchParams]);

    function normalizer(str = '') {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    }

    return (
        <ProductsContext.Provider value={{ query, results }}>
            {children}
        </ProductsContext.Provider>
    );
}
