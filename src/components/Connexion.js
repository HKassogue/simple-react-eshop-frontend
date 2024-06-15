import React from 'react'
import auth_img from '../img/auth_img.png'

const Connexion = () => {
  return (
    <main>
      <div id="auth-form">
        <h2>Connexion</h2>
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
            <input type="submit" value="Se connecter" className="submit-btn" />
          </div>
          <hr />
          <p>
            Vous n'avez pas de compte ?{' '}
            <a href="/inscription">Créez votre compte</a>
          </p>
        </form>
      </div>
      <div id="auth-img">
        <img src={auth_img} alt="Auth" />
      </div>
    </main>
  )
}

export default Connexion
