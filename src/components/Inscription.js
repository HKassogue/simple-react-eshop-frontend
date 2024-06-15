import React from 'react'
import auth_img from '../img/auth_img.png'

const Inscription = () => {
  return (
    <main>
      <div id="auth-form">
        <h2>Inscription</h2>
        <form method="post" action="">
          <div>
            <label htmlFor="lo">Login:</label>
            <input type="text" name="lo" id="lo" />
          </div>
          <div>
            <label htmlFor="mp">Mot de passe:</label>
            <input type="password" name="mp" id="mp" />
          </div>
          <div>
            <label htmlFor="mp2">Mot de passe à nouveau</label>
            <input type="password" name="mp2" id="mp2" />
          </div>
          <div>
            <input
              type="submit"
              value="Créer le compte"
              className="submit-btn"
            />
          </div>
          <hr />
          <p>
            Vous avez déjà un compte ? <a href="/connexion">Connectez-vous</a>
          </p>
        </form>
      </div>
      <div id="auth-img">
        <img src={auth_img} alt="Auth" />
      </div>
    </main>
  )
}

export default Inscription
