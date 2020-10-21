import { ThunkAction } from 'redux-thunk'
import { RootState } from './types'
import { fetchImages } from './api'
import actions from './actions'

const fetchData = (
): ThunkAction<any, RootState, unknown, any> => async dispatch => {
  dispatch(actions.fetchImagesRequest())

  try {
    const images = await fetchImages()

    dispatch(actions.fetchImagesSuccess(images))
  } catch (e) {
    dispatch(actions.fetchImagesError(e))
  }
}

export default {
  fetchData,
}
