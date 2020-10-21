import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'
import PageLayout from './layout/PageLayout'
import Sidebar from './layout/Sidebar'

const renderRoutes = () => (
  routes.map(route => {
    const { title, ...routeProps } = route

    return (
      <Route key={title} {...routeProps} />
    )
  })
)

const AppContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <PageLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect exact from='/' to='/photos' />
            {renderRoutes()}
            <Route>Page not found</Route>
          </Switch>
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  )
}

export default AppContainer
