import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Accueil from './Accueil';
import Panier from './Panier';


function App() {
  const savedPanier = localStorage.getItem('panier');
  const [panier, updatePanier] = useState(savedPanier ? JSON.parse(savedPanier) : []);
	useEffect(() => {
		localStorage.setItem('panier', JSON.stringify(panier));
	}, [panier]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil panier={panier} updatePanier={updatePanier} />}></Route>
        <Route path='/panier' element={<Panier panier={panier} updatePanier={updatePanier} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
