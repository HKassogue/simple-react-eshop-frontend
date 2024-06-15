import { useState } from 'react'

import Section from './Section'

const Main = ({ panier, updatePanier }) => {
  const [filters, setFilters] = useState({
    nom: '',
    cat: 'Tout',
    prixmin: '',
    prixmax: '',
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const handleFilterSubmit = (e) => {
    e.preventDefault()
    // Logique pour filtrer les produits
    console.log(filters)
  }

  return (
    <main>
      <Section panier={panier} updatePanier={updatePanier} filters={filters} />
      <aside id="filtre">
        <form onSubmit={handleFilterSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Produit:</label>
            <input
              type="research"
              className="form-control"
              name="nom"
              id="nom"
              placeholder="Que cherchez-vous?"
              onChange={handleFilterChange}
              value={filters.nom}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cat">Categorie:</label>
            <select
              name="cat"
              id="cat"
              className="form-control"
              onChange={handleFilterChange}
              value={filters.cat}
            >
              <option value="Tout">Toutes les catégories</option>
              <option value="Habits/Mode">Habits/Mode</option>
              <option value="Electronique">Appareils électroniques</option>
              <option value="Meuble">Meubles</option>
              <option value="Cosmétique">Produits cosmétiques</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="prixmin">Prix min:</label>
            <input
              type="text"
              className="form-control"
              name="prixmin"
              id="prixmin"
              placeholder="Prix min"
              onChange={handleFilterChange}
              value={filters.prixmin}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prixmax">Prix max:</label>
            <input
              type="text"
              className="form-control"
              name="prixmax"
              id="prixmax"
              placeholder="Prix max"
              onChange={handleFilterChange}
              value={filters.prixmax}
            />
          </div>
          <div>
            <button className="btn btn-primary" id="btn-filter">
              Filtrer les produits
            </button>
          </div>
        </form>
      </aside>
    </main>
  )
}

export default Main
