import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Accueil = ({panier, updatePanier}) => {
    return (
        <React.Fragment>
          <Header panier={panier} updatePanier={updatePanier}/>
          <Main panier={panier} updatePanier={updatePanier}/>
          <Footer />
        </React.Fragment>
      );
}

export default Accueil