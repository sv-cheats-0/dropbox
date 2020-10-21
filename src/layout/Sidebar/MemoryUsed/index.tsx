import React from 'react'
import { RootState } from '../../../ducks/photos/types'
import { photosSelectors, photosThunks } from '../../../ducks/photos'
// import s from './index.module.scss'

const TOTAL_SIZE = 200000

const TotalSize: React.FC = () => {
  return (
    <div />
  )
}

const mapStateToProps = (state: RootState) => ({
  sizeUsed: photosSelectors.getTotalPhotosSize(state),
})

export default connect(mapStateToProps)(TotalSize)
