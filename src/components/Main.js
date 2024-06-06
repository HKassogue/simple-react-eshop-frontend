import { useState } from "react";
import Section from "./Section";
import {produits} from '../datas/stock';

const Main = ({panier, updatePanier}) => {
    const [produitsToShow, setProduitsToShow] = useState([...produits]);

    function filtrer() {
        let liste = [...produits]
        let nom = document.getElementsByName('nom')[0].value
        if(nom) 
            liste = liste.filter(
                function(produit) {
                    return produit.nom.toLowerCase().includes(nom.toLowerCase())
                }
            )
        let categorie = document.getElementsByName('cat')[0].value
        if(categorie != 'Tout')
            liste = liste.filter(
                function(produit) {
                    return produit.categorie == categorie
                }
            )
        let prixmin = document.getElementsByName('prixmin')[0].value
        if(prixmin)
            liste = liste.filter(
                function(produit) {
                    return produit.prix >= prixmin
                }
            )
        let prixmax = document.getElementsByName('prixmax')[0].value
        if(prixmax)
            liste = liste.filter(
                function(produit) {
                    return produit.prix <= prixmax
                }
            )
        return liste
    }

    function filtrerHandle(event) {
        event.preventDefault();
        setProduitsToShow(filtrer());
    }

    return (
        <main>
            <Section panier={panier} updatePanier={updatePanier} produits={produitsToShow} />
            <aside id="filtre">
                <form>
                    <div className="form-group">
                        <label htmlFor="nom">Produit:</label>
                        <input type="research" className="form-control" name="nom" id="nom" placeholder="Que cherchez-vous?"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cat">Categorie:</label>
                        <select name="cat" id="cat" className="form-control">
                            <option value="Tout">Toutes les catégories</option>
                            <option value="Habits/Mode">Habits/Mode</option>
                            <option value="Electronique">Appareils électroniques</option>
                            <option value="Meuble">Meubles</option>
                            <option value="Cosmétique">Produits cosmétiques</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prixmin">Prix min:</label>
                        <input type="text" className="form-control" name="prixmin" id="prixmin" placeholder="Prix min"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prixmax">Prix max:</label>
                        <input type="text" className="form-control" name="prixmax" id="prixmax" placeholder="Prix max"/>
                    </div>
                    <div>
                        <button className="btn btn-primary" id="btn-filter" onClick={filtrerHandle}>Filtrer les produits</button>
                    </div>
                </form>
            </aside>
        </main>
    );
}

export default Main;