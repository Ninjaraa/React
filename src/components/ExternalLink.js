import React from 'react'

const ExternalLink = ({ link, icon }) => {
  return (
    <a href={link}>
      <i className={icon}></i>
    </a>
  )
}

export default ExternalLink