import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        {/* Ajoutez d'autres routes si nécessaire */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

