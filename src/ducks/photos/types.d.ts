import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './constants'

export type TPhoto = {
  name: string
  url: string
  size: number
  editedAt: number
}

export interface RootState {
  photos: TPhoto[]
  error: string
  loading: boolean
}

export type TFetchRequestAction = {
  type: typeof FETCH_DATA_REQUEST
}

export type TFetchSuccessAction = {
  type: FETCH_DATA_SUCCESS
  payload: RootState
}

export type TFetchErrorAction = {
  type: FETCH_DATA_ERROR
  payload: {
    error: string
  }
}
