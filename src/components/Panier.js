import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PanierItem from "./PanierItem";

const Panier = ({ panier, updatePanier }) => {
  return (
    <React.Fragment>
      <Header panier={panier} updatePanier={updatePanier} />
      <main>
        <div id="panier">
          <table>
            <thead>
              <tr>
                <th className="photo">Photo</th>
                <th className="nom">Nom</th>
                <th className="prix">Prix (F CFA)</th>
                <th className="quantite">Quantité</th>
                <th className="total">Total (F CFA)</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {panier.map((item, index) => (
                <PanierItem produit={item.produit} qte={item.qte} key={index} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" className="grandtotal">
                  GRAND TOTAL (F CFA)
                </td>
                <td colspan="4" className="grandtotalv">
                  {panier.reduce(
                    (total, item) => total + item.produit.prix * item.qte,
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
          <div id="btns-confirmer-annuler-panier">
            <button id="confirmer-payer">Confirmer le panier et payer</button>
            <button id="vider-panier">Vider le panier et reprendre</button>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Panier;
