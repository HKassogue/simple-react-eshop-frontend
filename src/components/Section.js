import {produits} from '../datas/stock';
import Produit from './Produit';

const Section = ({panier, updatePanier}) => {
    return (
        <section id="produits">
            <div id="produits-liste">
                { produits.map((produit, index) => (
                    <Produit 
                        key={produit.id}   
                        produit={produit} 
                        panier={panier} updatePanier={updatePanier}
                    />))
                }
            </div>
            <div id="produits-boutons">
                <a href="produits.html">Voir plus</a>
            </div>
        </section>
    );
}

export default Section;