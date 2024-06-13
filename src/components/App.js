import React from 'react';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Accueil';
import Panier from './Panier';
import Connexion from './Connexion';
import Inscription from './Inscription';


function App() {
  let [panier, updatePanier] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil panier={panier} updatePanier={updatePanier}/>}></Route>
        <Route path='/panier' element={<Panier panier={panier} updatePanier={updatePanier}/>}></Route>
        <Route path='/inscription' element={<Inscription panier={panier} updatePanier={updatePanier}/>}></Route>
        <Route path='/connexion' element={<Connexion panier={panier} updatePanier={updatePanier}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
