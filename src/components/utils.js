let res = await fetch(`/produits`, {
  mode: 'no-cors',
  credentials: 'include',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Origin: 'http://localhost:3000',
  },
})

let produits = await res.json()
if (produits && produits.succes) {
  console.log(produits)
}
