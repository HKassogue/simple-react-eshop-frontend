import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const APP_URI = 'http://localhost:8000'

export const produitsContext = createContext()

function ProduitsProvider({ children }) {
  const [produits, setProduits] = useState([])
  useEffect(() => {
    // fetch(`${APP_URI}/produits`).then((response) =>
    //   response
    //     .json()
    //     .then((prods) => setProduits(prods.data))
    //     .catch((error) => console.log(error))
    // )
    const getProduits = async () => {
      // const response = await fetch(`${APP_URI}/produits`)
      // const { data } = await response.json()
      const response = await axios.get(`${APP_URI}/produits`)
      const { data } = response.data
      setProduits(data)
    }
    getProduits()
  }, [])

  return (
    <produitsContext.Provider className="Provider" value={{ produits }}>
      {children}
    </produitsContext.Provider>
  )
}

export { ProduitsProvider }
