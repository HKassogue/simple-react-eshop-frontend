import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import {Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import Panier from './Panier';
import Accueil from './Accueil';
import Details from './Details';


function App() {
  let [panier, updatePanier] = useState([]);

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Accueil panier={panier} updatePanier={updatePanier}/>}> </Route>
          <Route path="/panier" element={<Panier panier={panier} updatePanier={updatePanier}/>}> </Route>
          <Route path="/details/:nom" element={<Details />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
