import React from 'react'
import { useParams } from 'react-router'
import { produitsContext } from '../hooks/products.context'
import { useContext } from 'react'
import { APP_URI } from '../hooks/products.context'
import axios from 'axios'
import useSWR from 'swr'

function Details({ panier, updatePanier }) {
  const { produitID } = useParams()
  /*
  const { produits } = useContext(produitsContext)
  const produit = produits.find((item) => item.id === produitID)
  /*/
  const getProduit = async () => {
    const response = await axios.get(`${APP_URI}/produits/${produitID}`)
    const { data } = response.data
    return data
  }
  const { data } = useSWR('produit', getProduit)
  if (!data) return <h2>Chargement ...</h2>
  const produit = data
  //*/
  console.log(produit)

  const addToPanier = () => {
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
    <main>
      <div id="details-photo">
        <img
          src={require(`../img/products/${produit.photo}`)}
          alt={produit.nom}
        />
      </div>
      <div id="details-droite">
        <div id="details-nom-cat-prix">
          <div id="details-nom-cat">
            <h2>{produit.nom}</h2>
            <span>{produit.categorie}</span>
          </div>
          <div id="details-prix">
            <span>{produit.prix}</span> F CFA
          </div>
        </div>
        <div id="details-description">{produit.description}</div>
        <div id="details-boutons">
          <button className="like-btn">Liker</button>
          <button className="ajout-panier-btn" onClick={addToPanier}>
            +Panier
          </button>
        </div>
      </div>
    </main>
  )
}

export default Details
