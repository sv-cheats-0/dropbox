import { Store } from 'redux'
import makeRootReducer from './rootReducer'

const activateStoreHMR = (store: Store): void => {
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(makeRootReducer())
    })
  }
}

export default activateStoreHMR
