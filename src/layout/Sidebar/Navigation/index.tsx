import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './index.module.scss'
import routes from '../../../routes'

const renderRoutes = () => (
  routes.map(route => (
    <NavLink
      key={route.title}
      strict
      className={s.navItem}
      activeClassName={s.active}
      to={route.path as string}
    >
      <span>{route.title}</span>
    </NavLink>
  ))
)

const Navigation: React.FC = () => {
  return (
    <nav className={s.navigation}>
      {renderRoutes()}
    </nav>
  )
}

export default Navigation
