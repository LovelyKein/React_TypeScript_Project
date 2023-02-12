import React from 'react'
import './Login.scss'

import router from '@/router'

import { useLocation, matchRoutes } from 'react-router-dom'

export default function Login() {
  const location = useLocation()
  const routes = matchRoutes(router, location.pathname);
  console.log(routes)
  // console.log(location)
  return (
    <div className='login'>Login</div>
  )
}

