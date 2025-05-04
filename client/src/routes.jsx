import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchResults from './pages/Search';
import ProductsProvider from './components/ProductsProvider/index.jsx';
import GameDetails from './pages/GameDetails/index.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='search/:query?'
                    element={
                        <ProductsProvider>
                            <SearchResults />
                        </ProductsProvider>
                    }
                />
                <Route path="gameDetails/:id" element={<GameDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}
