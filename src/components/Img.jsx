import React from 'react'

function Img({res}) {
  return (
    <a href={res.links.download} target="_blank">
        <img className="img-item" src={res.urls.regular} alt={res.alt_description}></img>
    </a>
  )
}

export default Img