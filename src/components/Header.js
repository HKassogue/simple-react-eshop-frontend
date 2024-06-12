// import '../style/index.css';
import user_avatar from "../img/user.png";
import logo from "../img/icons/ico-eshop-s.png";
import User from "./User";
import { Link, NavLink } from "react-router-dom";
import { useProducts } from "../hooks/products.context";

function Header() {
  const { products, panier, updatePanier } = useProducts();
  return (
    <header>
      <div id="header-top">
        <div id="logo-nom">
          <img src={logo} alt="Logo de eshop" />
          <h1>Shopez en toute sécurité !</h1>
        </div>
        <div id="user-nav">
          <User user_avatar={user_avatar} />
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={{}}>
                  Accueil
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/panier" className={{}}>
                  Panier (<span id="nav-panier">{panier.length}</span>)
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={{}}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="header-banniere">
        <div id="banniere_promo">
          -20% <br />
          Faites le plein du panier &#129321;
        </div>
        <div id="banniere_bouton">
          <marquee behavior="true" direction="left">
            Livraison partout au Mali. Satisfait ou remboursé sur 3 jours !
          </marquee>
          <a href="produits.html" className="bouton_rouge">
            Voir les produits{" "}
            <img src={require("../img/icons/fleche.png")} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
