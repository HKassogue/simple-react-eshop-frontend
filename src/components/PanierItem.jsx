import React from "react";
import addIcon from "../img/icons/add.png";
import minusIcon from "../img/icons/minus.png";
import delIcon from "../img/icons/delete.png";

const PanierItem = ({ produit, qte }) => {
  return (
    <tr id={produit.id}>
      <td className="photo">
        <img
          src={require(`../img/products/${produit.photo}`)}
          alt={produit.nom}
        />
      </td>
      <td className="nom">{produit.nom}</td>
      <td className="prix">{produit.prix}</td>
      <td className="quantite">{qte}</td>
      <td className="total">{produit.prix * qte}</td>
      <td className="action">
        <button className="plus-panier">
          <img src={addIcon} alt="Bouton incrémenter" />
        </button>
        <button className="minus-panier">
          <img src={minusIcon} alt="Bouton décrémenter" />
        </button>
        <button className="remove-panier">
          <img src={delIcon} alt="Bouton retirer" />
        </button>
      </td>
    </tr>
  );
};

export default PanierItem;
