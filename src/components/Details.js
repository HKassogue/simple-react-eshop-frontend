import React from 'react'
import { useParams } from 'react-router';


const Details = () => {
    const { nom } = useParams();
  return (
    <div>Details de {nom} </div>
  )
}

export default Details