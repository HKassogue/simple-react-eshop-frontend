import logo from '../img/icons/ico-eshop-s.png';
import user_avatar from '../img/user.png';
import User from './User';

function Header() {
    return (
        <header>
            <div id="header-top">
                <div id="logo-nom">
                    <img src={logo} alt="Logo de eshop"/>
                    <h1>Shopez en toute sécurité !</h1>
                </div>
                <div id="user-nav">
                    <User user_avatar={user_avatar}/>
                    <nav>
                        <ul>
                            <li><a href="index.html" className="active">Accueil</a></li>
                            <li><a href="panier.html" className="">Panier (<span id="nav-panier">0</span>)</a></li>
                            <li><a href="#" className="">Contact</a></li>                        
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="header-banniere">
                <div id="banniere_promo">
                    -20% <br/>
                    Faites le plein du panier &#129321;
                </div>
                <div id="banniere_bouton">
                    <marquee behavior direction>
                    Livraison partout au Mali. Satisfait ou remboursé sur 3 jours !
                    </marquee>
                    <a href="produits.html" className="bouton_rouge">Voir les produits <img src="img/icons/fleche.png" alt="" /></a>
                </div>
            </div>
        </header>
    );
}

// let profile = document.querySelector('.profile')
// let menu = document.querySelector('.menu')

// profile.addEventListener('click', function(event) {
//     event.preventDefault()
//     menu.classList.toggle('active')
// })

export default Header;