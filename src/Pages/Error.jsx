import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => {

  const error=useRouteError();
  return (
    <div>
      ErrorPage{error.data}
      <NavLink to='/'>
        <button>Go Home</button>
      </NavLink>
    </div>
  )
}

export default Error
