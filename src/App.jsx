import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componets/Header';
import SearchResults from './Componets/SearchResults';  // Import the search results component
import HomePage from './Componets/HomePage';
import MovieDetails from './Componets/MovieDetails';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search/:query" element={<SearchResults />} />
                    <Route path="/movie/:id" element={<MovieDetails />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
