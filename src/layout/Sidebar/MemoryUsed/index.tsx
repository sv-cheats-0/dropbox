import React from 'react'
import { connect } from 'react-redux'
import s from './index.module.scss'
import { RootState } from '../../../ducks/photos/types'
import { photosSelectors } from '../../../ducks/photos'

interface IProps {
  sizeUsed: number
}

const TOTAL_SIZE = 200000

const MemoryUsed: React.FC<IProps> = ({ sizeUsed }) => {
  const sizeToMB = (size: number) => `${(size / 1000).toFixed(1)} MB`
  const percentUsed = () => (sizeUsed / TOTAL_SIZE * 100).toFixed(2)

  return (
    <div className={s.memoryUsed}>
      <span className={s['memoryUsed-size']}>{`${sizeToMB(sizeUsed)} / ${sizeToMB(TOTAL_SIZE)}`}</span>
      <button type='button' className={s['memoryUsed-button']}>+</button>
      <div className={s['memoryUsed-track']}>
        <div style={{ width: `${percentUsed()}%`}} className={s['memoryUsed-progress']} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  sizeUsed: photosSelectors.getTotalPhotosSize(state),
})

export default connect(mapStateToProps)(MemoryUsed)
