import logo from '../img/icons/ico-eshop-s.png';
import user_avatar from '../img/user.png';

function Header() {
    return (
        <header>
            <div id="header-top">
                <div id="logo-nom">
                    <img src={logo} alt="Logo de eshop"/>
                    <h1>Shopez en toute sécurité !</h1>
                </div>
                <div id="user-nav">
                    <div id="user">
                        <div className="profile">
                            <h3>Username<br/><span>Vu le 01/01/2024</span></h3>
                            <div className="imgBx">
                                <img src={user_avatar} alt='Avatar du user'/>
                            </div>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="connexion.html"><ion-icon name="log-in-outline"></ion-icon>Connexion</a></li>
                                <li><a href="inscription.html"><ion-icon name="person-add-outline"></ion-icon>Inscription</a></li>
                                <li><a href="#"><ion-icon name="person-outline"></ion-icon>Profile</a></li>
                                <li><a href="#"><ion-icon name="cart-outline"></ion-icon>Mes commandes</a></li>
                                <li><a href="deconnexion.html"><ion-icon name="log-out-outline"></ion-icon>Déconnexion</a></li>
                            </ul>
                        </div>
                    </div>
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