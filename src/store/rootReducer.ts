import { Reducer } from 'redux'
import photosReducer from '../ducks/photos'

export const makeRootReducer = (): Reducer => {
  return photosReducer
}

export default makeRootReducer
