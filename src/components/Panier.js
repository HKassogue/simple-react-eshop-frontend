import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react';


const Panier = ({panier, updatePanier}) => {
  return (
    <React.Fragment>
        <Header panier={panier} updatePanier={updatePanier}/>
        <div>Contenu du panier</div>
        <Footer />
    </React.Fragment>
  )
}

export default Panier