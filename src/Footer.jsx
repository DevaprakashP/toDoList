import React from 'react'

const Footer = ({foot}) => {
  return (
    <footer>{foot} List {foot===1?"item":"items"}</footer>
  )
}

export default Footer