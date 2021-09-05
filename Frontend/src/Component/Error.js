import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container mt-5">
      <article className="text-center">
        <h3 className="text-center">Oops Nothing Found!</h3>
        <Link to="/"><button className="btn btn-primary">Back to home</button></Link>
      </article>
    </div>
  )
}

export default Error
