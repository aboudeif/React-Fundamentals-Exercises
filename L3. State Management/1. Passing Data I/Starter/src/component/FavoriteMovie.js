import React from 'react'

const FavoriteMovie = ({ user, movie }) => {
  return (
    <li>
          <span style={{ color: "rgb(16 185 129)" }}>{user}</span>'s
          favorite movie is <span style={{ color: "rgb(2 132 199)" }}>{movie}</span>.
        </li>
  )
}

export default FavoriteMovie