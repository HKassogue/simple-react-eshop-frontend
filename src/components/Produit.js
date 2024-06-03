const Produit = ({photo, nom, prix}) => {
    return (
        <div className="produit-badge">
            <div className="produit-image">
                <img src={`../img/products/${photo}`} alt={nom} />
            </div>
            <div className="produit-details">
                <h2>{nom}</h2>
                <h3>{prix} F</h3>
            </div>
            <div className="produit-bouton">
                <button className="ajout-panier-btn" id="1">+Panier</button>
                <button className="details-btn" id="1">Détails</button>
            </div>
        </div>
    );
}

export default Produit;