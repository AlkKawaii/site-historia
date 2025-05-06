import { Link } from 'react-router-dom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

export default function ArrowButton({ data, currentHash, direction }) {
    if (!Array.isArray(data) || data.length === 0) {
        return null; // Retorna null se data não for um array válido
    }

    const currentIndex = data.findIndex((item) => item.id === currentHash);

    if (currentIndex === -1) {
        return null; // Retorna null se currentHash não for encontrado
    }

    if (direction === 'up') {
        if (currentIndex === 0) {
            return null; // Não há item anterior
        }
        const previousItem = data[currentIndex - 1];
        return (
            <Link to={`#${previousItem.id}`}>
                <GoChevronUp size={30} />
            </Link>
        );
    } else if (direction === 'down') {
        if (currentIndex === data.length - 1) {
            return null; // Não há próximo item
        }
        const nextItem = data[currentIndex + 1];
        return (
            <Link to={`#${nextItem.id}`}>
                <GoChevronDown size={30} />
            </Link>
        );
    }

    return null; // Caso direction não seja 'up' ou 'down'
}
