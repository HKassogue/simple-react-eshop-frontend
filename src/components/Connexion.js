import React from 'react';
import Footer from './Footer';
import auth_img from "../img/auth_img.png";
import Header from './Header';

const Connexion = ({panier, updatePanier}) => {
  return (
    <>
      <Header panier={panier} updatePanier={updatePanier} />
      <main>
        <div id="auth-form">
          <h2>Connexion</h2>
          <form method="post" action="">
            <div>
              <label htmlFor="lo">Login:</label>
              <input type="text" name="lo" id="lo"/>
            </div>
            <div>
              <label htmlFor="mp">Mot de passe:</label>
              <input type="password" name="mp" id="mp"/>
            </div>
            <div>
              <input type="submit" value="Se connecter" className="submit-btn"/>
            </div>
            <hr/>
            <p>
              Vous n'avez pas de compte ? <a href="/inscription">Créez votre compte</a>
            </p>
          </form>
        </div>
        <div id="auth-img">
          <img src={auth_img} alt="Auth"/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Connexion;
