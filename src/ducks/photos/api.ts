import photos from '../../photos.json'
import { RootState } from './types'

const TIMEOUT = 1500

export const fetchImages = (): Promise<RootState> => {
  const state: RootState = {
    photos,
    error: '',
    loading: false,
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(state)
    }, TIMEOUT)
  })
}
