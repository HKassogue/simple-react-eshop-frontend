import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Accueil from './Accueil'
import Panier from './Panier'
import Connexion from './Connexion'
import Inscription from './Inscription'
import Details from './Details'
import Header from './Header'
import Footer from './Footer'

function App() {
  const savedPanier = localStorage.getItem('panier')
  const [panier, updatePanier] = useState(
    savedPanier ? JSON.parse(savedPanier) : []
  )
  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier))
  }, [panier])

  return (
    <Router>
      <Header panier={panier} />
      <Routes>
        <Route
          path="/"
          element={<Accueil panier={panier} updatePanier={updatePanier} />}
        ></Route>
        <Route
          path="/panier"
          element={<Panier panier={panier} updatePanier={updatePanier} />}
        ></Route>
        <Route path="/inscription" element={<Inscription />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
        <Route
          path="/details/:produitID"
          element={<Details panier={panier} updatePanier={updatePanier} />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
