import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const AppContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from='/' to='/photos' />
        <Route>Page not found</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppContainer
