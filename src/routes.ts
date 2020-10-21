import React from 'react'
import { RouteProps } from 'react-router-dom'

const Files = React.lazy(() => import('./pages/Files'))
const Photos = React.lazy(() => import('./pages/Photos'))
const Sharing = React.lazy(() => import('./pages/Sharing'))
const Links = React.lazy(() => import('./pages/Links'))
const Events = React.lazy(() => import('./pages/Events'))
const GetStarted = React.lazy(() => import('./pages/GetStarted'))

interface IRoute extends RouteProps {
  title: string
}

const routes: IRoute[] = [
  {
    exact: true,
    path: '/files',
    title: 'Files',
    component: Files,
  },
  {
    path: '/photos',
    title: 'Photos',
    component: Photos,
  },
  {
    path: '/sharing',
    title: 'Sharing',
    component: Sharing,
  },
  {
    path: '/links',
    title: 'Links',
    component: Links,
  },
  {
    path: '/events',
    title: 'Events',
    component: Events,
  },

  {
    path: '/get-started',
    title: 'Get Started',
    component: GetStarted,
  },
]

export default routes
