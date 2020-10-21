import * as actionTypes from './constants'
import * as types from './types'

const ACTION_HANDLERS = {
  [actionTypes.FETCH_IMAGES_REQUEST]: (state: types.RootState) => {
    return {
      ...state,
      loading: true,
    }
  },
  [actionTypes.FETCH_IMAGES_SUCCESS]: (
    state: types.RootState,
    { payload }: types.TFetchSuccessAction,
  ) => {
    return {
      ...state,
      ...payload,
      loading: false,
    }
  },
  [actionTypes.FETCH_IMAGES_ERROR]: (
    state: types.RootState,
    { payload }: types.TFetchErrorAction,
  ): types.RootState => {
    return {
      ...state,
      error: payload.error,
      loading: false,
    }
  },
}

const appReducer = (state, action: any) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default appReducer
