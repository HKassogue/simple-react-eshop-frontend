import { Link } from 'react-router-dom'

const Produit = ({ produit, panier, updatePanier }) => {
  const addToPanier = (produit) => {
    const itemInPanier = panier.find((item) => item.produit.id === produit.id)
    if (itemInPanier) {
      const panierSansItem = panier.filter(
        (item) => item.produit.id !== produit.id
      )
      updatePanier([...panierSansItem, { produit, qte: itemInPanier.qte + 1 }])
    } else {
      updatePanier([...panier, { produit, qte: 1 }])
    }
  }

  return (
    <div className="produit-badge">
      <div className="produit-image">
        <img
          src={require(`../img/products/${produit.photo}`)}
          alt={produit.nom}
        />
      </div>
      <div className="produit-details">
        <h2>{produit.nom}</h2>
        <h3>{produit.prix} F</h3>
      </div>
      <div className="produit-bouton">
        <button
          className="ajout-panier-btn"
          onClick={() => {
            addToPanier(produit)
          }}
        >
          +Panier
        </button>
        <Link className="details-btn" to={'/details/' + produit.id}>
          Détails
        </Link>
      </div>
    </div>
  )
}

export default Produit
