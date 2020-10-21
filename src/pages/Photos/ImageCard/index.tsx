import React from 'react'
import s from './index.module.scss'
import { TPhoto } from '../../../ducks/photos/types'

const ImageCard: React.FC<TPhoto> = ({ name, size, url }) => {
  return (
    <div className={s.imageCard}>
      <img className={s['imageCard-img']} src={url} alt={name} />
      <span className={s['imageCard-name']}>{name}</span>
      <span className={s['imageCard-size']}>{`${(size / 1000).toFixed(1)} MB`}</span>
    </div>
  )
}

export default ImageCard
