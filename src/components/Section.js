import { produits } from '../datas/stock'
import Produit from './Produit'

const Section = ({ panier, updatePanier, filters }) => {
  const filteredProduits = produits.filter((produit) => {
    const nomMatch = produit.nom
      .toLowerCase()
      .includes(filters.nom.toLowerCase())
    const catMatch = filters.cat === 'Tout' || produit.categorie === filters.cat
    const prixMinMatch =
      filters.prixmin === '' || produit.prix >= parseFloat(filters.prixmin)
    const prixMaxMatch =
      filters.prixmax === '' || produit.prix <= parseFloat(filters.prixmax)
    return nomMatch && catMatch && prixMinMatch && prixMaxMatch
  })

  return (
    <section id="produits">
      <div id="produits-liste">
        {filteredProduits.map((produit) => (
          <Produit
            key={produit.id}
            produit={produit}
            panier={panier}
            updatePanier={updatePanier}
          />
        ))}
      </div>
      <div id="produits-boutons">
        <a href="produits.html">Voir plus</a>
      </div>
    </section>
  )
}

export default Section
