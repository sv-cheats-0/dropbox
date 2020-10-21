import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './rootReducer'
import activateStoreHMR from './storeHMR'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootStore = (initialState: any = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store: Store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )

  activateStoreHMR(store)

  return store
}

export default rootStore()
