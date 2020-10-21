import React from 'react'
import ReactDOM from 'react-dom'
import App from './AppContainer'

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    MOUNT_NODE,
  )
}

if (module.hot) {
  // Development render functions
  const renderApp = render
  const renderError = (error: string) => {
    ReactDOM.render(<div>{error}</div>, MOUNT_NODE)
  }

  // Wrap render in try/catch
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }

  // Setup hot module replacement
  module.hot.accept('./AppContainer', render)
}

render()
