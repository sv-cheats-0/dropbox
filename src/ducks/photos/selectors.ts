import { RootState } from './types'

const getPhotos = (state: RootState) => state.photos
const getLoading = (state: RootState) => state.loading
const getTotalPhotosSize = (state: RootState) => {
  return state.photos.reduce((total, current) => total + current.size, 0)
}

export default {
  getPhotos,
  getLoading,
  getTotalPhotosSize,
}
