const Main = () => {
    return (
        <main>
            <section id="produits">
                <div id="produits-liste">
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-1.jpg" alt="Appareil-photo-canon" />
                        </div>
                        <div class="produit-details">
                            <h2>Appareil photo Canon</h2>
                            <h3>35000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="1">+Panier</button>
                            <button class="details-btn" id="1">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-2.jpg" alt="Pollo bleu" />
                        </div>
                        <div class="produit-details">
                            <h2>Pollo bleu</h2>
                            <h3>3500 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="2">+Panier</button>
                            <button class="details-btn" id="2">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-3.jpg" alt="Lampe de lit" />
                        </div>
                        <div class="produit-details">
                            <h2>Lampe de lit</h2>
                            <h3>12000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="3">+Panier</button>
                            <button class="details-btn" id="3">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-4.jpg" alt="Basket Nike" />
                        </div>
                        <div class="produit-details">
                            <h2>Basket Nike</h2>
                            <h3>21000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="4">+Panier</button>
                            <button class="details-btn" id="4">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-5.jpg" alt="Drone civil" />
                        </div>
                        <div class="produit-details">
                            <h2>Drone civil</h2>
                            <h3>60000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="5">+Panier</button>
                            <button class="details-btn" id="5">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-6.jpg" alt="Smart watch" />
                        </div>
                        <div class="produit-details">
                            <h2>Smart watch</h2>
                            <h3>15000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="6">+Panier</button>
                            <button class="details-btn" id="6">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-7.jpg" alt="Chemise noire" />
                        </div>
                        <div class="produit-details">
                            <h2>Chemise noire</h2>
                            <h3>6000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="7">+Panier</button>
                            <button class="details-btn" id="7">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-8.jpg" alt="Crème Curology" />
                        </div>
                        <div class="produit-details">
                            <h2>Crème Curology</h2>
                            <h3>13500 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="8">+Panier</button>
                            <button class="details-btn" id="8">Détails</button>
                        </div>
                    </div>
                    <div class="produit-badge">
                        <div class="produit-image">
                            <img src="img/products/product-9.jpg" alt="Fauteille de bureu" />
                        </div>
                        <div class="produit-details">
                            <h2>Fauteille de bureu</h2>
                            <h3>75000 F</h3>
                        </div>
                        <div class="produit-bouton">
                            <button class="ajout-panier-btn" id="9">+Panier</button>
                            <button class="details-btn" id="9">Détails</button>
                        </div>
                    </div>
                </div>
                <div id="produits-boutons">
                    <a href="produits.html">Voir plus</a>
                </div>
            </section>
            <aside id="filtre">
                <form>
                    <div class="form-group">
                        <label for="nom">Produit:</label>
                        <input type="research" class="form-control" name="nom" id="nom" placeholder="Que cherchez-vous?"/>
                    </div>
                    <div class="form-group">
                        <label for="cat">Categorie:</label>
                        <select name="cat" id="cat" class="form-control">
                            <option value="Tout">Toutes les catégories</option>
                            <option value="Habits/Mode">Habits/Mode</option>
                            <option value="Electronique">Appareils électroniques</option>
                            <option value="Meuble">Meubles</option>
                            <option value="Cosmétique">Produits cosmétiques</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="prixmin">Prix min:</label>
                        <input type="text" class="form-control" name="prixmin" id="prixmin" placeholder="Prix min"/>
                    </div>
                    <div class="form-group">
                        <label for="prixmax">Prix max:</label>
                        <input type="text" class="form-control" name="prixmax" id="prixmax" placeholder="Prix max"/>
                    </div>
                    <div>
                        <button class="btn btn-primary" id="btn-filter">Filtrer les produits</button>
                    </div>
                </form>
            </aside>
        </main>
    );
}

export default Main;