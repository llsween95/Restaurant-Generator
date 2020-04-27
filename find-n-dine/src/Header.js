import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Find-N-Dine</h1>
      </Link>
    </header>
  )
}
