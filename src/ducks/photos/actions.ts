import * as actionTypes from './constants'
import * as types from './types'

const fetchImagesRequest = (): types.TFetchRequestAction => ({
  type: actionTypes.FETCH_IMAGES_REQUEST,
})

const fetchImagesSuccess = (payload: types.RootState): types.TFetchSuccessAction => ({
  type: actionTypes.FETCH_IMAGES_SUCCESS,
  payload,
})

const fetchImagesError = (error: string): types.TFetchErrorAction => ({
  type: actionTypes.FETCH_IMAGES_ERROR,
  payload: {
    error,
  },
})

export default {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesError,
}
